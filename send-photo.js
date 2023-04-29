import { photoComments, photoCategories } from './config.js'
import { sendMessage, sendMessageWithPhotoLink, sendPhoto, sendRandomMessage, random, randomPhoto } from './utils.js'

async function sendRandomPhoto() {
	const photo = await randomPhoto(random(photoCategories))
	await sendPhoto(photo.url)
	if (photo.description) await sendMessage(photo.description)
	await sendMessageWithPhotoLink(`Photo by @‌${photo.author} on Unsplash`, photo.author, photo.page)
	await sendRandomMessage(photoComments)
}

sendRandomPhoto()
