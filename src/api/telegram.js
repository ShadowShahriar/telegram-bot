import dotenv from 'dotenv'
import fetch from 'node-fetch'
dotenv.config()

import { Telegraf, Input, Markup } from 'telegraf'
import { collapseWhiteSpace, toNameCase } from '../utils.js'

const TELEGRAM_API = 'https://api.telegram.org/bot'
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const USER_ID = process.env.TELEGRAM_USER_ID

const bot = new Telegraf(BOT_TOKEN)
const botPostMethod = async (method, params) => {
	const url = `${TELEGRAM_API}${BOT_TOKEN}/${method}`
	const data = await fetch(url, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(params)
	})
	return data.json()
}

async function sendMessage(message) {
	const response = await bot.telegram.sendMessage(USER_ID, collapseWhiteSpace(message))
	return response
}

async function sendPhoto(url, caption) {
	const response = await bot.telegram.sendPhoto(USER_ID, url, { caption })
	return response
}

async function sendMessageSeries(array) {
	for (let message of array) await sendMessage(message)
}

async function sendMessagesHTML(array) {
	for (let message of array) {
		await botPostMethod('sendMessage', {
			text: message,
			chat_id: USER_ID,
			parse_mode: 'HTML',
			disable_web_page_preview: true
		})
	}
}

async function sendUnsplashPhoto(photoObj) {
	const { photoURL, siteURL, authorURL, authorName, caption } = photoObj
	const photo = Input.fromURLStream(photoURL)
	const authorNameFixed = toNameCase(collapseWhiteSpace(authorName))
	const credit = `Photo by ${authorNameFixed} on Unsplash`

	const btn_profile = Markup.button.url('Check Profile', authorURL)
	const btn_link = Markup.button.url('See Photo', siteURL)
	const keyboard = Markup.inlineKeyboard([[btn_profile, btn_link]])

	const response_photo = await bot.telegram.sendPhoto(USER_ID, photo, { caption })
	const response_message = await bot.telegram.sendMessage(USER_ID, credit, keyboard)
	return response_photo && response_message
}

async function sendGIF(url, caption) {
	const GIF = Input.fromURLStream(url)
	const response = await bot.telegram.sendAnimation(USER_ID, GIF, { caption })
	return response
}

async function sendSticker(sticker) {
	await botPostMethod('sendSticker', { sticker, chat_id: USER_ID })
}

async function sendYouTubeVideo(videoObj) {
	const { thumbnail, channel, id, caption } = videoObj

	const reply_markup = {
		inline_keyboard: [
			[
				{ text: 'View Channel', url: `https://youtube.com/channel/${channel}` },
				{ text: 'Watch on YouTube', url: `https://youtube.com/watch?v=${id}` }
			]
		]
	}

	const response = await bot.telegram.sendPhoto(USER_ID, thumbnail, { caption, reply_markup })
	return response
}

async function sendPexelsVideo(videoObj) {
	const { userName, userURL, videoURL, siteURL } = videoObj
	const authorNameFixed = toNameCase(collapseWhiteSpace(userName))
	const caption = `Video by ${authorNameFixed} on Pexels`

	const reply_markup = {
		inline_keyboard: [
			[
				{ text: 'Check Profile', url: userURL },
				{ text: 'View on Pexels', url: siteURL }
			]
		]
	}

	const response = await bot.telegram.sendVideo(USER_ID, videoURL, { caption, reply_markup })
	return response
}

export {
	sendMessage,
	sendMessagesHTML,
	sendMessageSeries,
	sendPhoto,
	sendGIF,
	sendSticker,
	sendUnsplashPhoto,
	sendYouTubeVideo,
	sendPexelsVideo
}
