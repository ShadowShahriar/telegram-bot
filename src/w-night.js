import { query, user, script } from './config.js'
import { random, months } from './utils.js'
import { me, aboutNight } from './data/messages.js'
import { sendMessage, sendMessageSeries, sendPhoto } from './api/telegram.js'
import { readRecord, writeRecord } from './api/firebase.js'
import obtainPhoto from './api/unsplash.js'

async function main() {
	console.time()
	const now = new Date()
	const date = now.getDate()
	const month = months.short[now.getMonth()]
	const key = `${date}-${month}`
	const exclusions = script.night.exclude.map(i => i.toLowerCase())

	if (exclusions.includes(key.toLowerCase())) {
		console.log(`The date ${key} was excluded`)
		console.timeEnd()
		return
	}

	const record = script.night.recordName
	const prevRecord = await readRecord(record)
	const validStyle = ['single', 'twopart'].filter(s => !prevRecord.includes(s))
	const style = random(validStyle)
	await writeRecord(record, [style])

	const lang = random([0, 1])
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
