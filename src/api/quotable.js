import fetch from 'node-fetch'

async function obtainQuote(tags) {
	const endpoint = 'https://api.quotable.io/quotes/random'
	const params = tags && tags.length > 0 ? tags.join('|') : ''
	const url = `${endpoint}?limit=1&${params}`
	const response = await fetch(url)
	const data = await response.json()
	return {
		author: data[0].author,
		content: data[0].content,
		tags: data[0].tags.map(i => i.replaceAll(' ', '-').toLowerCase())
	}
}

export default obtainQuote
