import { cheerfulComments } from './config.js'
import { sendRandomMessage } from './utils.js'

async function sendComment() {
	await sendRandomMessage(cheerfulComments)
}

sendComment()
