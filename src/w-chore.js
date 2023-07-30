import { script } from './config.js'
import { random } from './utils.js'
import { sendMessageSeries } from './api/telegram.js'
import { readRecord, writeRecord } from './api/firebase.js'
import { aboutChore } from './data/messages.js'

async function main() {
	console.time()
	const record = script.chore.recordName
	const prevRecord = await readRecord(record)
	const validMessages = aboutChore.filter((_, i) => !prevRecord.includes(i))
	const choice = random(validMessages)
	const newIndex = aboutChore.indexOf(choice)

	let nextRecord = [newIndex, ...prevRecord]
	if (nextRecord.length > script.chore.recordMax) {
		nextRecord.length = script.chore.recordMax
	}
	await writeRecord(record, nextRecord)
	await sendMessageSeries(choice)
	console.timeEnd()
}

main()
