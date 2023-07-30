import { script, query } from './config.js'
import { random } from './utils.js'
import { aboutReminder } from './data/messages.js'
import { sendGIF, sendMessageSeries } from './api/telegram.js'
import { readRecord, writeRecord } from './api/firebase.js'
import obtainGIFs from './api/tenor.js'

async function sendOrganicMessages(recordKey, messageKey) {
	const record = script[recordKey].recordName
	const prevRecord = await readRecord(record)
	const messages = aboutReminder[messageKey]
	const validMessages = messages.filter((_, i) => !prevRecord.includes(i))
	const choice = random(validMessages)
	const newIndex = messages.indexOf(choice)

	let nextRecord = [newIndex, ...prevRecord]
	if (nextRecord.length > script[recordKey].recordMax) {
		nextRecord.length = script[recordKey].recordMax
	}
	await writeRecord(record, nextRecord)
	await sendMessageSeries(choice)
}

async function main() {
	console.time()
	const date = new Date().getDate()

	if (date % 2 === 0) {
		const GIFs = await obtainGIFs(random(query.tenor.sketch))
		await sendGIF(random(GIFs))
		await sendOrganicMessages('reminderDrawing', 'drawing')
	} else {
		const GIFs = await obtainGIFs(random(query.tenor.story))
		await sendGIF(random(GIFs))
		await sendOrganicMessages('reminderWriting', 'writing')
	}
	console.timeEnd()
}

main()
