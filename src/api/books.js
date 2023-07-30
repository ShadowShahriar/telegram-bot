import fetch from 'node-fetch'

async function obtainBooks(q, maxResults) {
	const fields = ['title', 'authors', 'publisher', 'imageLinks']
	const endpoint = 'https://www.googleapis.com/books/v1/volumes'
	const params = {
		q,
		langRestrict: 'en',
		fields: `items(${fields.map(field => `volumeInfo/${field}`).join(',')})`,
		maxResults
	}
	const url = `${endpoint}?${new URLSearchParams(params)}`
	let response
	try {
		response = await fetch(url)
	} catch (error) {
		return []
	}
	if (response.status === 200) {
		const data = await response.json()
		console.log('Valid books:')

		return data.items
			.map(item => {
				const vol = item.volumeInfo
				const img = vol.imageLinks
				const cover = img
					? img.extraLarge || img.large || img.medium || img.small || img.thumbnail || img.smallThumbnail
					: null

				if (vol.title.toLowerCase().includes('summary')) {
					return false
				}

				console.log(`- ${vol.title}`)
				return {
					title: vol.title,
					authors: vol.authors || (vol.publisher ? [vol.publisher] : ['Unknown']),
					cover
				}
			})
			.filter(i => i !== false)
	} else {
		return []
	}
}

export default obtainBooks
