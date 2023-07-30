import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { capitalizeFirstLetter, cleanString } from '../utils.js'
dotenv.config()

async function obtainPhoto(query) {
	const endpoint = 'https://api.unsplash.com/photos/random'
	const params = {
		query,
		client_id: process.env.UNSPLASH_ACCESS_KEY
	}
	const url = `${endpoint}?${new URLSearchParams(params)}`
	const response = await fetch(url)

	if (response.status === 200) {
		const data = await response.json()
		const caption = capitalizeFirstLetter(
			cleanString(data.description || data.alt_description || 'Caption this! 👆🏼')
		)
		return {
			caption,
			authorName: data.user.name,
			authorURL: data.user.links.html,
			siteURL: data.links.html,
			photoURL: data.urls.regular
		}
	}

	return false
}

export default obtainPhoto
