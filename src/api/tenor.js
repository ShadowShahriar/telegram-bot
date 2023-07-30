import dotenv from 'dotenv'
import fetch from 'node-fetch'
dotenv.config()

async function obtainGIFs(query) {
	const endpoint = 'https://tenor.googleapis.com/v2/search'
	const params = {
		q: query,
		key: process.env.TENOR_API_KEY,
		limit: 50
	}
	const url = `${endpoint}?${new URLSearchParams(params)}`
	const response = await fetch(url)

	if (response.status === 200) {
		const data = await response.json()
		return data.results.map(result => result.media_formats.mp4.url)
	}

	return []
}

export default obtainGIFs
