import { reminders, reminderGIFs, sketchReminders, sketchReminderGIFs, greet } from './config.js'
import { sendChatAction, sendRandomMessage, getGIFsFromTenor, random, sendGIF, sendMessage } from './utils.js'

async function sendReminder() {
	const date = new Date().getDate()

	if (date % 2 === 0) {
		const GIFs = await getGIFsFromTenor(random(reminderGIFs))
		await sendRandomMessage(reminders)
		await sendChatAction('upload_video')
		await sendGIF(random(GIFs))
	} else {
		const GIFs = await getGIFsFromTenor(random(sketchReminderGIFs))
		await sendMessage(random(greet))
		await sendRandomMessage(sketchReminders)
		await sendChatAction('upload_video')
		await sendGIF(random(GIFs))
	}
}

sendReminder()
