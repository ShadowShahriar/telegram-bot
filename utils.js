import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { Telegraf, Input } from 'telegraf'
dotenv.config()

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
const sendMessage = async str => await bot.telegram.sendMessage(process.env.TELEGRAM_USER_ID, str)
const sendVideo = async id => await bot.telegram.sendMessage(process.env.TELEGRAM_USER_ID, `https://youtu.be/${id}`)
const sendPhoto = async url => await bot.telegram.sendPhoto(process.env.TELEGRAM_USER_ID, Input.fromURLStream(url))
const sendGIF = async url => await bot.telegram.sendAnimation(process.env.TELEGRAM_USER_ID, Input.fromURLStream(url))
const random = array => array[Math.round(Math.random() * (array.length - 1))]

async function randomPhoto(query) {
	const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
	const data = await fetch(url).then(response => response.json())
	return {
		description: data.alt_description,
		url: data.urls.regular,
		author: data.user.username,
		page: data.links.html,
	}
}

async function sendRandomMessage(array) {
	const messages = random(array)
	for (let message of messages) await sendMessage(message)
}

function getYouTubeAPI(pagetoken) {
	const ptoken = typeof pagetoken === 'undefined' ? '' : `&pageToken=${pagetoken}`
	return (
		'https://www.googleapis.com/youtube/v3/playlistItems' +
		'?part=snippet&maxResults=50' +
		`&playlistId=${process.env.YOUTUBE_PLAYLIST_ID}` +
		`&key=${process.env.YOUTUBE_API_KEY}${ptoken}`
	)
}

async function getVideosFromPlaylist(array, pagetoken) {
	const videos = array || []
	const response = await fetch(getYouTubeAPI(pagetoken)).then(response => response.json())
	const items = response.items.map(item => item.snippet.resourceId.videoId)
	videos.push(...items)
	if (response.nextPageToken) {
		const more = await getVideosFromPlaylist(videos, response.nextPageToken)
		return more
	} else return videos
}

async function getGIFsFromTenor(query) {
	const apiurl = `https://tenor.googleapis.com/v2/search?q=${query}&key=${process.env.TENOR_API_KEY}&limit=50`
	const data = await fetch(apiurl).then(response => response.json())
	return data.results.map(result => result.media_formats.mp4.url)
}

async function getRandomQuote() {
	const url = `https://api.quotable.io/random`
	const data = await fetch(url).then(response => response.json())
	return { author: data.author, content: data.content }
}

export {
	sendMessage,
	sendMD,
	sendRandomMessage,
	sendPhoto,
	sendVideo,
	sendGIF,
	random,
	randomPhoto,
	getRandomQuote,
	getVideosFromPlaylist,
	getGIFsFromTenor,
}
