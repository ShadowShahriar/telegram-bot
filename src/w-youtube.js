import { script } from './config.js'
import { random } from './utils.js'
import { aboutYouTube } from './data/messages.js'
import { sendYouTubeVideo, sendMessageSeries } from './api/telegram.js'
import { readRecord, writeRecord } from './api/firebase.js'
import obtainYouTubeVideos from './api/youtube.js'

async function main() {
	console.time()
	const videos = await obtainYouTubeVideos()
	const videoObj = random(videos)
	await sendYouTubeVideo(videoObj)

	const record = script.youtube.recordName
	const prevRecord = await readRecord(record)
	const validMessages = aboutYouTube.filter((_, i) => !prevRecord.includes(i))
	const choice = random(validMessages)
	const newIndex = aboutYouTube.indexOf(choice)

	let nextRecord = [newIndex, ...prevRecord]
	if (nextRecord.length > script.youtube.recordMax) {
		nextRecord.length = script.youtube.recordMax
	}
	await writeRecord(record, nextRecord)
	await sendMessageSeries(choice)
	console.timeEnd()
}

main()
