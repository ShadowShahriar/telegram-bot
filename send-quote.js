import { quoteComments, greet } from './config.js'
import { random, sendMessage, sendRandomMessage, getRandomQuote } from './utils.js'

async function sendQuote() {
	const quote = await getRandomQuote()
	const messages = [
		`হঠাৎ করে ${quote.author}-র এই উক্তিটা মনে পড়ে গেল -`,
		`${quote.author} once said,`,
		`${quote.author}-র এই কথাটা আগে শুনেছ?`,
		`Here is a quote by ${quote.author}`,
		`Did you know that ${quote.author} said,`,
	]
	await sendMessage(random(greet))
	await sendMessage(random(messages))
	await sendMessage(`"${quote.content}"`)
	await sendRandomMessage(quoteComments)
}

sendQuote()
