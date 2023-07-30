import dotenv from 'dotenv'
import { createClient } from 'pexels'
dotenv.config()

async function obtainPexelsVideos(query) {
	const client = createClient(process.env.PEXELS_API_KEY)
	const response = await client.videos.search({ query, per_page: 24 })
	const videos = response.videos.map(item => {
		return {
			userName: item.user.name,
			userURL: item.user.url,
			videoURL: item.video_files[0].link,
			siteURL: item.url
		}
	})
	return videos
}

export default obtainPexelsVideos
