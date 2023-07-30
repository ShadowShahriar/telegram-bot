import { script } from './config.js'
import { random } from './utils.js'
import { sendMessageSeries } from './api/telegram.js'
import { readRecord, writeRecord } from './api/firebase.js'
import { aboutMotivation } from './data/messages.js'

async function main() {
	console.time()
	const record = script.cheerup.recordName
	const prevRecord = await readRecord(record)
	const validMessages = aboutMotivation.filter((_, i) => !prevRecord.includes(i))
	const choice = random(validMessages)
	const newIndex = aboutMotivation.indexOf(choice)

	let nextRecord = [newIndex, ...prevRecord]
	if (nextRecord.length > script.cheerup.recordMax) {
		nextRecord.length = script.cheerup.recordMax
	}
	await writeRecord(record, nextRecord)
	await sendMessageSeries(choice)
	console.timeEnd()
}

main()
