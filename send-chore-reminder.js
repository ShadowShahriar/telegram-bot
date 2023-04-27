import { chores } from './config.js'
import { sendRandomMessage } from './utils.js'

async function sendReminder() {
	await sendRandomMessage(chores)
}

sendReminder()
