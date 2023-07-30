import obtainPhoto from './api/unsplash.js'
import { sendUnsplashPhoto, sendMessage } from './api/telegram.js'
import { random } from './utils.js'
import { query } from './config.js'
import { aboutPhoto } from './data/messages.js'

async function main() {
	console.time()
	const photoObj = await obtainPhoto(random(query.unsplash))
	await sendUnsplashPhoto(photoObj)
	await sendMessage(random(aboutPhoto))
	console.timeEnd()
}

main()
