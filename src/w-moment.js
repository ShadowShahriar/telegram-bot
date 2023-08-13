import dotenv from 'dotenv'
dotenv.config()

import { script } from './config.js'
import { getWeekdays, months, random } from './utils.js'
import { sendPhoto, sendMessage } from './api/telegram.js'
import { readRecord, writeRecord, getStorageURL } from './api/firebase.js'
import { aboutMoment } from './data/messages.js'

function isToday(d) {
	const D = new Date()
	return D.getDate() === d.getDate() && D.getMonth() === d.getMonth()
}

function pretty(d) {
	return `${d.getDate()} ${months.short[d.getMonth()]}`
}

async function main() {
	console.time()

	const secondDay = getWeekdays('Sun')[1]
	const thirdDay = getWeekdays('Mon')[3]
	console.log('Today:'.padStart(14), pretty(new Date()))
	console.log('Second Sunday:', pretty(secondDay))
	console.log('Fourth Monday:', pretty(thirdDay))

	if (process.env.TESTING_ON_PUSH) {
	} else {
		if (isToday(secondDay) || isToday(thirdDay)) {
			console.log('This is the moment')
		} else {
			console.log('Aborted')
			console.timeEnd()
			return
		}
	}

	const { directory, fileMax, fileExt, recordMax, recordName } = script.moment
	const arr = new Array(fileMax).fill(null).map((_, i) => i)

	const record = recordName
	const prevRecord = await readRecord(record)
	const validOptions = arr.filter((_, i) => !prevRecord.includes(i))
	const choice = random(validOptions)
	const newIndex = arr.indexOf(choice)

	let nextRecord = [newIndex, ...prevRecord]
	if (nextRecord.length > recordMax) {
		nextRecord.length = recordMax
	}
	await writeRecord(record, nextRecord)

	const file = `${(choice + '').padStart(2, '0')}.${fileExt}`
	await sendPhoto(getStorageURL(directory, file))
	await sendMessage(random(aboutMoment))
	console.timeEnd()
}

main()
