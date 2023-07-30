import obtainVideos from './api/pexels.js'
import { sendPexelsVideo, sendMessage } from './api/telegram.js'
import { random } from './utils.js'
import { query } from './config.js'
import { aboutVideo } from './data/messages.js'

async function main() {
	console.time()
	try {
		const videos = await obtainVideos(random(query.pexels.video))
		const videoObj = random(videos)
		await sendPexelsVideo(videoObj)
		await sendMessage(random(aboutVideo))
	} catch (error) {
		console.error(error)
	}
	console.timeEnd()
}

main()
