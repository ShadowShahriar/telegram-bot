import { birthdayWishes } from './config.js'
import { sendRandomMessage } from './utils.js'

async function sendWish() {
	await sendRandomMessage(birthdayWishes)
}

sendWish()
