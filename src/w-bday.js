import { random } from './utils.js'
import { sendMessageSeries } from './api/telegram.js'
import { aboutBirthday } from './data/messages.js'

async function main() {
	console.time()
	await sendMessageSeries(random(aboutBirthday))
	console.timeEnd()
}

main()
