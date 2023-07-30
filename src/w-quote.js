import { query } from './config.js'
import { sendMessage, sendMessageSeries } from './api/telegram.js'
import { init, aboutQuote, aboutQuoteEnd } from './data/messages.js'
import { random, toNameCase } from './utils.js'
import obtainQuote from './api/quotable.js'

async function main() {
	console.time()
	const lang = random([0, 1])
	const quote = await obtainQuote(query.quotable)
	const tag = quote.tags[0].replaceAll('-', ' ')
	const topic = toNameCase(tag)

	await sendMessage(random(init[lang]))
	await sendMessage(random(aboutQuote(quote.author, topic, tag)))
	await sendMessage(`"${quote.content}"`)
	await sendMessageSeries(random(aboutQuoteEnd))
	console.timeEnd()
}

main()
