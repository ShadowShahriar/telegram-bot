import { query, user, script } from './config.js'
import { random, months } from './utils.js'
import { me, aboutNight, aboutExam } from './data/messages.js'
import { sendMessage, sendMessageSeries, sendPhoto } from './api/telegram.js'
import { readRecord, writeRecord } from './api/firebase.js'
import obtainPhoto from './api/unsplash.js'

const getToday = _ => new Date()
const getNextDate = _ => {
	const now = getToday()
	now.setDate(now.getDate() + 1)
	return now
}

const obtainKey = now => {
	const date = now.getDate()
	const month = months.short[now.getMonth()]
	const key = `${date}-${month}`
	return key
}

async function main() {
	console.time()
	const lang = random([0, 1])
	const key = obtainKey(getToday())
	const nextKey = obtainKey(getNextDate())
	const exclusions = script.night.exclude.map(i => i.toLowerCase())
	const exams = script.night.exams.map(i => i.toLowerCase())

	if (exclusions.includes(key.toLowerCase())) {
		console.log(`The date ${key} was excluded`)
		console.timeEnd()
		return
	}

	if (exams.includes(nextKey.toLowerCase())) {
		console.log(`Today: ${key}`)
		console.log(`Tomorrow: ${nextKey}`)
		console.log(`Tomorrow is your exam`)
		const messages = random(aboutExam[lang])
		await sendMessageSeries(messages)
		console.timeEnd()
		return
	}

	const record = script.night.recordName
	const prevRecord = await readRecord(record)
	const validStyle = ['single', 'twopart'].filter(s => !prevRecord.includes(s))
	const style = random(validStyle)
	await writeRecord(record, [style])

	if (style === 'single') {
		const init = random(me[lang])
		const properInit = user[lang].includes(init) ? init : init.toLowerCase()
		const emoji = random(aboutNight[style][2])
		const comma = random([', ', ' '])
		const includeInit = random([true, false])
		const includeEmoji = random([true, false])
		const base = random(aboutNight[style][lang])
		const message = `${base}${includeInit ? comma + properInit : ''}${includeEmoji ? ' ' + emoji : ''}`
		await sendMessage(message)

		const includePhoto = random([true, false])
		if (includePhoto) {
			const photoObj = await obtainPhoto(random(query.pexels.photo))
			await sendPhoto(photoObj.photoURL)
		}
	} else {
		const messages = random(aboutNight[style][lang])
		await sendMessageSeries(messages)
	}
	console.timeEnd()
}

main()
