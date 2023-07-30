import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { collapseWhiteSpace } from '../utils.js'
dotenv.config()

function getYouTubeAPI(pagetoken) {
	const endpoint = 'https://www.googleapis.com/youtube/v3/playlistItems'
	let params = {
		part: 'snippet',
		maxResults: 50,
		playlistId: process.env.YOUTUBE_PLAYLIST_ID,
		key: process.env.YOUTUBE_API_KEY
	}
	if (typeof pagetoken !== 'undefined') {
		params.pageToken = pagetoken
	}
	return `${endpoint}?${new URLSearchParams(params)}`
}

async function obtainYouTubeVideos(array, pagetoken) {
	const videos = array || []
	const response = await fetch(getYouTubeAPI(pagetoken)).then(response => response.json())
	const items = response.items.map(item => {
		return {
			thumbnail: item.snippet.thumbnails.high.url,
			channel: item.snippet.videoOwnerChannelId,
			caption: collapseWhiteSpace(item.snippet.title),
			id: item.snippet.resourceId.videoId
		}
	})

	videos.push(...items)

	if (response.nextPageToken) {
		const more = await obtainYouTubeVideos(videos, response.nextPageToken)
		return more
	} else {
		return videos
	}
}

export default obtainYouTubeVideos
