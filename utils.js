import dotenv from 'dotenv'
import fetch from 'node-fetch'
import { Telegraf, Input, Markup } from 'telegraf'
dotenv.config()

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
const sendChatAction = async action => await bot.telegram.sendChatAction(process.env.TELEGRAM_USER_ID, action, () => {})
const sendMessage = async str => await bot.telegram.sendMessage(process.env.TELEGRAM_USER_ID, collapseWhiteSpace(str))
const sendMessageWithPhotoLink = async (str, author, url) =>
	await bot.telegram.sendMessage(
		process.env.TELEGRAM_USER_ID,
		str,
		Markup.inlineKeyboard([
			[
				Markup.button.url('Check Profile', `https://unsplash.com/@${author}`),
				Markup.button.url('See Photo', url),
			],
		])
	)
const sendVideo = async id => await bot.telegram.sendMessage(process.env.TELEGRAM_USER_ID, `https://youtu.be/${id}`)
const sendPhoto = async url => await bot.telegram.sendPhoto(process.env.TELEGRAM_USER_ID, Input.fromURLStream(url))
const sendGIF = async url => await bot.telegram.sendAnimation(process.env.TELEGRAM_USER_ID, Input.fromURLStream(url))
const random = array => array[Math.round(Math.random() * (array.length - 1))]
const collapseWhiteSpace = str => str.replace(/\s+/g, ' ').replace(new RegExp(' -র', 'g'), '-র')

// borrowed from https://stackoverflow.com/a/69447629
const toBn = n => (n + '').replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d])

// borrowed from https://gist.github.com/JamieMason/c1a089f6f1f147dbe9f82cb3e25cd12e
const toOxfordComma = (array, connector) =>
	array.length === 2
		? array.join(` ${connector} `)
		: array.length > 2
		? array
				.slice(0, array.length - 1)
				.concat(`${connector} ${array.slice(-1)}`)
				.join(', ')
		: array.join(', ')

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
	sendChatAction,
	sendMessage,
	sendMessageWithPhotoLink,
	sendRandomMessage,
	sendPhoto,
	sendVideo,
	sendGIF,
	random,
	randomPhoto,
	getRandomQuote,
	getVideosFromPlaylist,
	getGIFsFromTenor,
	toBn,
	toOxfordComma,
}
