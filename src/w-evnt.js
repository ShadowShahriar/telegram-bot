import people from './data/people.js'
import num2str from './num2str.js'
import num2str_bn from './num2str-bn.js'
import { init, aboutDate, aboutMore } from './data/messages.js'
import { script } from './config.js'
import { random, months, toList, withParticle, toBn } from './utils.js'
import { sendMessage, sendMessageSeries } from './api/telegram.js'

const daysAhead = script.bday.lookAhead
const pad = n => `${n}`.padStart(2, '0')
const getToday = () => new Date()

const getFutureDate = days => {
	const now = getToday()
	now.setDate(now.getDate() + parseInt(days))
	return now
}

const getKey = (extra = 0) => {
	const today = getFutureDate(extra)
	const DD = pad(today.getDate())
	const MM = months.short[today.getMonth()]
	return `${DD}-${MM}`
}

const groupPeople = key => {
	const result = {}
	for (let person of people) {
		if (person[key]) {
			let groupkey = person[key].substring(0, 6)
			if (!result[groupkey]) result[groupkey] = []
			result[groupkey].push(person)
		}
	}
	return result
}

const groupByData = (key, arr, lang) => {
	const result = {}
	for (let item of arr) {
		if (item[key]) {
			let groupkey = item[key][lang]
			if (!result[groupkey]) result[groupkey] = []
			const person = random([item.fullName[lang], item.nickName[lang]])
			result[groupkey].push({
				name: person,
				event: item.eventype ? item.eventype[lang] : null,
				prefix: item.prefix,
				past: !!item.eventwas
			})
		}
	}
	return result
}

const toNameRole = obj => {
	let result = []
	for (let role in obj) {
		const item = obj[role]
		let prefix = true
		if (item.length === 1) prefix = item[0].prefix
		const set = item.map((u, i) => {
			const r = role.toLowerCase()
			if (i === 0) {
				return prefix ? `${r} ${u.name}`.trim() : `${u.name} ${r}`.trim()
			} else {
				return u.name
			}
		})
		result.push(set)
	}
	return result.flat(1)
}

const toNameEvent = (obj, remain, lang) => {
	let result = []
	for (let ev in obj) {
		const item = obj[ev]
		const set = item.map((u, i) => {
			if (lang === 0) {
				const start = remain === 0 ? (u.past ? 'was' : 'is') : 'will be'
				const evl = ev.toLowerCase()
				if (i === 0) {
					return `${start} the ${evl} of ${u.name}`
				} else {
					return u.name
				}
			} else {
				const start = remain === 0 ? (u.past ? 'ছিলো' : '') : 'আছে'
				const evl = ev.toLowerCase()
				if (i === item.length - 1) {
					return `${withParticle(u.name)} ${evl} ${start}`.trim()
				} else {
					return u.name
				}
			}
		})
		result.push(toList(set, !lang, ['and', 'আর'][lang]))
	}
	return toList(result, !lang, ['and', 'আর'][lang])
}

async function sendReminders(register) {
	let z = 0
	for (let event of register) {
		const { type, remaining, people, year, multi, lang } = event
		const date = getFutureDate(remaining)
		const D = date.getDate()
		const M = date.getMonth()
		const EN_M = months.long[M]
		const BN_M = months.bengali[M]
		const BN_D = toBn(D)
		const q1 = [`${D} ${EN_M}`, `${BN_D} ${BN_M}`][lang]
		const q2 = [`${EN_M}-er ${D} tarikh`, `${withParticle(BN_M)} ${BN_D} তারিখ`][lang]
		const q3 = [`${EN_M} masher ${D} tarikh`, `${BN_M} মাসের ${BN_D} তারিখ`][lang]
		const q4 = [`${D} tarikh`, `${BN_D} তারিখ`][lang]
		const R = [remaining, toBn(remaining)][lang]
		const yearNow = date.getFullYear()
		const yearThen = Number(year.split('-')[2])
		const yearDiff = yearNow - yearThen
		const Y = [yearDiff, toBn(yearDiff)][lang]
		const QY = ['year', 'years'][yearDiff > 1 ? 1 : 0]
		const W_Y = [num2str(yearDiff), num2str_bn(yearDiff)][lang]
		const W_R = [num2str(remaining), num2str_bn(remaining)][lang]
		const P_BN = ['o ke', 'oderke'][multi ? 1 : 0]

		const P = [
			["'em", 'them'],
			['ওকে', 'ওদেরকে']
		][lang][multi ? 1 : 0]
		const Pz = [
			["'em", 'them'],
			['ওর', 'ওদের']
		][lang][multi ? 1 : 0]

		let diff
		if (remaining === 0) diff = 'today'
		else if (remaining === 1) diff = 'tomorrow'
		else diff = 'upcoming'

		const ppl = toNameRole(groupByData('role', people, lang))
		const EVNT = toNameEvent(groupByData('eventype', people, lang), remaining, lang)

		const l = toList(ppl, !lang, ['and', 'আর'][lang])
		const lWP = withParticle(l)
		const lWS = `${l}'s`
		const root = aboutDate[type][diff]({ l, lWP, lWS, EVNT, P_BN, P, Pz, q1, q2, q3, q4, R, W_R, Y, QY, W_Y })[lang]
		if (z > 0) {
			const message = random(aboutMore[lang])
			await sendMessage(message)
		}
		for (let series of root) {
			const messages = random(series)
			if (messages) await sendMessageSeries(messages)
		}
		z++
	}
}

async function main() {
	console.time()
	let found = false
	const searchDate = [daysAhead, 1, 0]
	const searchGroup = ['fndsince', 'birthday', 'eventday']
	const lang = random([0, 1])
	let register = []

	for (let date of searchDate) {
		const key = getKey(date)
		for (let group of searchGroup) {
			const groups = groupPeople(group)
			if (key in groups) {
				found = true
				const year = groups[key][0][group]
				const ppl = groups[key]
				register.push({
					type: group,
					key,
					year,
					remaining: date,
					people: ppl,
					lang,
					multi: !!(ppl.length > 1)
				})
			}
		}
	}
	if (register.length > 0) {
		console.log(register)
		await sendMessage(random(init[lang]))
		await sendReminders(register)
	}
	if (!found) {
		console.log('No upcoming birthday or event')
	}
	console.timeEnd()
}

main()
