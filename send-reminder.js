import { reminders, reminderGIFs } from './config.js'
import { sendRandomMessage, getGIFsFromTenor, random, sendGIF } from './utils.js'

async function sendReminder() {
	const GIFs = await getGIFsFromTenor(random(reminderGIFs))
	await sendRandomMessage(reminders)
	await sendGIF(random(GIFs))
}

sendReminder()
