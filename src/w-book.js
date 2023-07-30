import { init, aboutBooks, aboutBookCover } from './data/messages.js'

import {
	random,
	toList,
	toNameCase,
	asSearchQuery,
	getParticle,
	decapitalizeFirstLetter,
	shuffleArray
} from './utils.js'

import { sendMessageSeries, sendMessagesHTML, sendPhoto } from './api/telegram.js'
import { readRecord, writeRecord } from './api/firebase.js'
import { script } from './config.js'
import obtainBooks from './api/books.js'
import books from './data/library.js'

async function main() {
	console.time()
	const record = script.books.recordName
	const prevRecord = await readRecord(record)
	const validBooks = books.filter((_, i) => !prevRecord.includes(i))
	const choice = random(validBooks)
	const newIndex = books.indexOf(choice)

	let nextRecord = [newIndex, ...prevRecord]
	if (nextRecord.length > script.books.recordMax) {
		nextRecord.length = script.books.recordMax
	}
	await writeRecord(record, nextRecord)

	const query = `${choice.title} by ${choice.author}`
	let results = await obtainBooks(query, random(script.books.resultMax))
	if (results.length === 0) {
		console.log('No books found')
		console.timeEnd()
		return
	}

	const original = results[0]
	shuffleArray(results)
	const book = random([results[0], original])

	const style = random([0, 1])
	const lang = random([0, 1])
	const beginning = random(init[lang])
	const oxford = lang === 0 ? true : false
	const connector = ['and', 'আর']

	let authorNames = book.authors.map(i => toNameCase(i))
	if (authorNames.length > script.books.authorMax) {
		authorNames.length = script.books.authorMax
	}

	const authors = toList(authorNames, oxford, connector[lang])
	const particle = getParticle(authors)
	const title = asSearchQuery(book.title, `${book.title} by ${authors}`)
	const message = random(aboutBooks(title, authors, particle)[lang])

	let arr = [beginning, ...message]
	let showingCover = false

	if (style === 0) {
		arr = [...message]
		const rest = lang === 0 ? decapitalizeFirstLetter(arr[0]) : arr[0]
		arr[0] = `${beginning}, ${rest}`
	}

	if (book.cover) {
		showingCover = true
		await sendPhoto(book.cover)
	}

	await sendMessagesHTML(arr)
	if (!showingCover) {
		await sendMessageSeries(random(aboutBookCover[lang]))
	}
	console.timeEnd()
}

main()
