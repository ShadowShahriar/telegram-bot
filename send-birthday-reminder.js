import birthdays from './birthdays.js'
import { random, sendMessage, sendRandomMessage, toBn, toOxfordComma } from './utils.js'
import { monthInBengali, numberInBengali, greet } from './config.js'
const daysAhead = 7

function addRelationship(people, relationships, prefix) {
	if (typeof relationships === 'string') {
		const last = people.length - 1
		if (prefix) people[0] = `${relationships} ${people[0]}`
		else people[last] = `${people[last]} ${relationships}`
		return people
	} else
		return people.map((person, index) => {
			if (relationships[index])
				if (prefix[index] || prefix === true) return `${relationships[index]} ${person}`
				else return `${person} ${relationships[index]}`
			else return person
		})
}

function getBirthday(date) {
	const month = date.getMonth() + 1
	const day = date.getDate()
	const bdayInfo = birthdays[`${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}`]
	if (bdayInfo) {
		const people = getBirthdayPerson(bdayInfo)
		const date = `${toBn(day)} ${monthInBengali[month - 1]}`
		const dateOnly = toBn(day)
		const pronoun = typeof bdayInfo.person === 'string' ? 'ওর' : 'ওদের'
		return { pronoun, people, dateOnly, date, ...bdayInfo }
	} else return null
}

function getBirthdayPerson(bday, connector = 'আর') {
	const personName = bday.person
	const relationship = bday.role
	const prefix = bday.prefix || false

	if (typeof personName === 'string')
		if (prefix) return `${relationship} ${personName}`
		else return `${personName} ${relationship}`
	else {
		const people = addRelationship(personName, relationship, prefix)
		return toOxfordComma(people, connector)
	}
}

function getFutureDate(days) {
	const now = new Date()
	now.setDate(now.getDate() + parseInt(days))
	return now
}

function getAllEndings(pronoun) {
	const target = pronoun === 'ওর' ? 'ওকে' : 'ওদেরকে'
	return [
		...getDefaultEndings(pronoun),
		[`${target} বার্থডে উইশ করেছো? 👀`],
		[`${target} বার্থডে উইশ করেছো তো? 👀`],
		[`${target} বার্থডে উইশ করার কথা মনে আছে তো? 👀`],
		[`${target} বার্থডে উইশ করে ভুলে যাও নি তো? 👀`, `তাড়াতাড়ি উইশ করে ফেলো!`, '😉'],
		[`${target} বার্থডে উইশ করে ভুলে যাও নি তো? 👀`, `এখনো না করে থাকলে তাড়াতাড়ি উইশ করে ফেলো!`, `সময় বেশি নাই!`],
	]
}

function getDefaultEndings(pronoun) {
	return [
		[`${pronoun} জন্য করা বার্থডে প্ল্যান রেডি তো? 😁`],
		[`${pronoun} জন্য গিফট রেডি তো? 😁`],
		[`${pronoun} জন্য গিফট প্ল্যান করেছো তো? 😁`],
		[`${pronoun} জন্য গিফট রেডি করতে ভুলে যেও না! 👀`],
		[`${pronoun} জন্য গিফট রেডি করতে ভুলে যেও না কিন্তু! 👀`],
		[`${pronoun} জন্য গিফট রেডি করেছো? 👀`],
		[`সময় কিন্তু বেশি নাই!`, `${pronoun} জন্য বার্থডে গিফট রেডি করে ফেইলো! ✨`],
		[`সময় বেশি নাই!`, `${pronoun} জন্য বার্থডে গিফট রেডি করে ফেইলো! ✨`],
		[`Sooo ${pronoun} জন্য প্ল্যান কী? 👀`],
	]
}

async function sendBirthdayReminder() {
	const now = new Date()
	const birthday = getBirthday(now)
	const birthdayTomorrow = getBirthday(getFutureDate(1))
	const birthdayInFuture = getBirthday(getFutureDate(daysAhead))

	if (!!birthday) {
		const { date, people, pronoun } = birthday
		const context = [
			[`আজকে কিন্তু তোমার ${people}-র জন্মদিন!`],
			[`আজকে কিন্তু ${date}`, `${people}-র জন্মদিন!`],
			[`আজকে ${people}-র জন্মদিন!`],
			[`আজকে ${date}!`, '🎉', `${people}-র জন্মদিন!`],
			[`মনে আছে তো আজকে যে ${people}-র জন্মদিন?`],
		]
		await sendMessage(random(greet))
		await sendRandomMessage(context)
		await sendRandomMessage(getAllEndings(pronoun))
		console.log('Today')
	} else if (!!birthdayTomorrow) {
		const { date, dateOnly, people, pronoun } = birthdayTomorrow
		const context = [
			[`আগামীকাল ${date}`, `${people}-র জন্মদিন!`],
			[`কালকে ${date}`, `${people}-র জন্মদিন!`],
			[`আগামীকাল ${people}-র জন্মদিন!`],
			[`কালকে ${people}-র জন্মদিন!`],
			[`কালকে কিন্তু ${people}-র জন্মদিন!`],
			[`আগামীকাল কিন্তু ${dateOnly} তারিখ`, `${people}-র জন্মদিন!`],
			[`কালকে কিন্তু ${dateOnly} তারিখ`, `${people}-র জন্মদিন!`],
			[`মনে আছে তো কালকে যে ${people}-র জন্মদিন?`],
			[`মনে আছে তো আগামীকাল যে ${people}-র জন্মদিন?`],
		]
		await sendMessage(random(greet))
		await sendRandomMessage(context)
		await sendRandomMessage(getDefaultEndings(pronoun))
		console.log('Tomorrow')
	} else if (!!birthdayInFuture) {
		const { date, dateOnly, people, pronoun } = birthdayInFuture
		const ahead = numberInBengali[daysAhead] || toBn(daysAhead)
		const context = [
			[`${dateOnly} তারিখ কিন্তু ${people}-র জন্মদিন!`],
			[`${dateOnly} তারিখে কিন্তু ${people}-র জন্মদিন!`],
			[`আগামী ${date} কিন্তু ${people}-র জন্মদিন!`],
			[`আগামী ${date} ${people}-র জন্মদিন!`],
			[`${date} কিন্তু ${people}-র জন্মদিন!`],
			[`${ahead} দিন পর কিন্তু ${people}-র জন্মদিন!`],
			[`${ahead} দিন পর ${people}-র জন্মদিন!`],
			[`আর ${ahead} দিন পর কিন্তু ${people}-র জন্মদিন!`],
			[`আর ${ahead} দিন পর ${people}-র জন্মদিন!`],
			[`${ahead} দিন পর কিন্তু তোমার ${people}-র জন্মদিন!`],
			[`${ahead} দিন পর তোমার ${people}-র জন্মদিন!`],
			[`আর ${ahead} দিন পর কিন্তু তোমার ${people}-র জন্মদিন!`],
			[`আর ${ahead} দিন পর তোমার ${people}-র জন্মদিন!`],
		]
		await sendMessage(random(greet))
		await sendRandomMessage(context)
		await sendRandomMessage(getDefaultEndings(pronoun))
		console.log(`In ${daysAhead} days`)
	} else {
		console.log('No upcoming birthdays 👀')
	}
	return true
}

sendBirthdayReminder()
