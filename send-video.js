import { videoComments } from './config.js'
import { random, sendVideo, sendRandomMessage, getVideosFromPlaylist } from './utils.js'

async function sendRandomVideo() {
	const videos = await getVideosFromPlaylist()
	await sendVideo(random(videos))
	await sendRandomMessage(videoComments)
}

sendRandomVideo()
