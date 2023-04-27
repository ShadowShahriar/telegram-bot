import { photoComments, photoCategories } from './config.js'
import { sendMessage, sendMD, sendPhoto, sendRandomMessage, random, randomPhoto } from './utils.js'

async function sendRandomPhoto() {
	const photo = await randomPhoto(random(photoCategories))
	await sendPhoto(photo.url)
	if (photo.description) await sendMessage(photo.description)
	await sendMD(`Photo by @${photo.author} on Unsplash`)
	await sendRandomMessage(photoComments)
}

sendRandomPhoto()
