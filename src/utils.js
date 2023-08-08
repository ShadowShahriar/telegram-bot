import fetch from 'node-fetch'
const months = {
	short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	long: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],
	bengali: [
		'জানুয়ারী',
		'ফেব্রুয়ারী',
		'মার্চ',
		'এপ্রিল',
		'মে',
		'জুন',
		'জুলাই',
		'অগাস্ট',
		'সেপ্টেম্বর',
		'অক্টোবর',
		'নভেম্বর',
		'ডিসেম্বর'
	]
}

const weekdays = {
	short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
}

/**
 * Return a random item from a given array.
 * @param array The given array
 */
const random = array => array[Math.round(Math.random() * (array.length - 1))]

/**
 * Replace additional white-spaces with a single space from a given string.
 * @param str The given string
 */
const collapseWhiteSpace = str => str.replace(/\s+/g, ' ')

/**
 * Capitalize the first letter of a given string.
 * @param str The given string
 */
const capitalizeFirstLetter = str => (str ? str[0].toUpperCase() + str.slice(1) : '')

/**
 * Decapitalize the first letter of a given string.
 * @param str The given string
 */
const decapitalizeFirstLetter = str => (str ? str[0].toLowerCase() + str.slice(1) : '')

/**
 * Trim and remove additional white-spaces from a given string.
 * @param str The given string
 */
const cleanString = str => collapseWhiteSpace(str.trim())

/**
 * Retrieve the particle to add after the name of a person (or people), or a location
 * @param word The name of the person or location
 * @param multi When `true`, it would add particle that is used to mention a group of people.
 * For example- Pritha + der = Prithader. Here the particle is "der"
 * @param loc When `true`, it would add particle that is used to mention a location
 */
const getParticle = (word, multi, loc) => {
	let particle
	const bengaliCharStart = parseInt('0980', 16)
	const bengaliCharEnd = parseInt('09FF', 16)
	const char = word.split('')[word.length - 1]
	const code = char.charCodeAt(0)

	if (code >= bengaliCharStart && code <= bengaliCharEnd) {
		if (/[ািীুূৃেৈোৌ]/.test(char)) {
			particle = loc ? 'তে' : 'র'
		} else {
			particle = loc ? 'ে' : 'ের'
			if (char === 'ই' || char === 'ঈ') {
				particle = loc ? 'য়ে' : 'য়ের'
			}
		}
		if (multi) {
			particle = 'দের'
		}
	} else {
		if (/[aeiou]/.test(char)) {
			particle = loc ? ' te' : 'r'
		} else {
			particle = loc ? '-e' : '-er'
		}
		if (multi) {
			particle = 'der'
		}
	}

	return particle
}

/**
 * Add the appropriate particle after the name of a person (or people), or a location
 * @param word The name of the person or location
 * @param multi When `true`, it would add particle that is used to mention a group of people.
 * For example- Pritha + der = Prithader. Here the particle is "der"
 * @param loc When `true`, it would add particle that is used to mention a location
 */
const withParticle = (word, multi, location) => word + getParticle(word, multi, location)

/**
 * Add particles to all items in a given array.
 * @param arr The given array
 */
const allParticle = arr => arr.map(item => withParticle(item))

/**
 * Convert English digits to Bengali ones.
 * @author Mohsen Alyafei
 * @info https://stackoverflow.com/a/69447629
 * @param num The given digit
 * @returns string
 */
const toBn = num => (num + '').replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d])

/**
 * Shuffle the given array.
 * @author Laurens Holst
 * @info https://stackoverflow.com/a/12646864
 * @param array The given array
 */
const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
}

/**
 * Convert an array to a string with appropriate punctuations and connectors.
 * @author Jamie Mason
 * @info https://gist.github.com/JamieMason/c1a089f6f1f147dbe9f82cb3e25cd12e
 * @param arr The given array
 * @param oxford When `true`, add a comma before the connector. Defaults to `false`
 * @param connector Defaults to 'and'
 */
const toList = (arr, oxford = false, connector = 'and') => {
	if (arr.length === 2) return arr.join(` ${connector} `)
	else if (arr.length > 2)
		return `${arr.slice(0, arr.length - 1).join(', ')}${oxford ? ',' : ''} ${connector} ${arr.slice(-1)}`
	else return arr.join(', ')
}

/**
 * Convert a string to a grammatically correct title case string.
 * @author dipole_moment
 * @info https://stackoverflow.com/a/46774740
 * @param str The given string
 */
const toTitleCase = str => {
	const articles = ['a', 'an', 'the']
	const conjunctions = ['for', 'and', 'nor', 'but', 'or', 'yet', 'so']
	const prepositions = [
		'with',
		'at',
		'from',
		'into',
		'upon',
		'of',
		'to',
		'in',
		'for',
		'on',
		'by',
		'like',
		'over',
		'plus',
		'but',
		'up',
		'down',
		'off',
		'near'
	]

	// The list of spacial characters can be tweaked here
	const replaceCharsWithSpace = str => str.replace(/[^0-9a-z&'.’*"/\\]/gi, ' ').replace(/(\s\s+)/gi, ' ')
	const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.substr(1)
	const normalizeStr = str => str.trim() //.toLowerCase().trim()
	const shouldCapitalize = (word, fullWordList, posWithinStr) => {
		if (posWithinStr == 0 || posWithinStr == fullWordList.length - 1) {
			return true
		}

		return !(articles.includes(word) || conjunctions.includes(word) || prepositions.includes(word))
	}

	str = replaceCharsWithSpace(str)
	str = normalizeStr(str)

	let words = str.split(' ')
	if (words.length <= 2) {
		// Strings less than 3 words long should always have first words capitalized
		words = words.map(w => capitalizeFirstLetter(w))
	} else {
		for (let i = 0; i < words.length; i++) {
			words[i] = shouldCapitalize(words[i], words, i) ? capitalizeFirstLetter(words[i], words, i) : words[i]
		}
	}

	return words.join(' ')
}

/**
 * Properly capitalize a name in a given string.
 * @author Tom Kay
 * @info https://stackoverflow.com/a/46959528
 * @param str The given string
 */
const toNameCase = str => str.replace(/(^|\s)\S/g, t => t.toUpperCase())

/**
 * Convert a string to a HTML anchor element that goes to a Google Search.
 * @param str The given string
 * @param query The query for the Google Search
 */
const asSearchQuery = (str, query) => {
	const endpoint = 'https://www.google.com/search'
	const params = {
		q: query,
		sourceid: 'chrome',
		ie: 'UTF-8'
	}
	const url = `${endpoint}?${new URLSearchParams(params)}`
	const html = `<a href="${url}">${str}</a>`
	return html
}

/**
 * An improved version of `fetch()` that creates requests with a configurable timeout.
 * @author Dmitri Pavlutin
 * @info https://dmitripavlutin.com/timeout-fetch-request/
 * @param resource The given URL
 * @param options `{ timeout: number }`
 */
const fetchWithTimeout = async (resource, options = {}) => {
	const { timeout = 8000 } = options
	const controller = new AbortController()
	const id = setTimeout(_ => controller.abort(), timeout)
	const response = await fetch(resource, {
		...options,
		signal: controller.signal
	})
	clearTimeout(id)
	return response
}

/**
 * Returns all specific Weekdays for the current month
 * @author jabclab
 * @info https://stackoverflow.com/a/9481478
 */
const getWeekdays = target => {
	const d = new Date()
	const month = d.getMonth()
	let days = []

	d.setDate(1)

	while (d.getDay() !== weekdays.short.indexOf(capitalizeFirstLetter(target))) {
		d.setDate(d.getDate() + 1)
	}

	while (d.getMonth() === month) {
		days.push(new Date(d.getTime()))
		d.setDate(d.getDate() + 7)
	}

	return days
}

export {
	random,
	collapseWhiteSpace,
	capitalizeFirstLetter,
	decapitalizeFirstLetter,
	cleanString,
	getParticle,
	withParticle,
	allParticle,
	toBn,
	toList,
	toTitleCase,
	toNameCase,
	shuffleArray,
	asSearchQuery,
	fetchWithTimeout,
	getWeekdays,
	months
}
