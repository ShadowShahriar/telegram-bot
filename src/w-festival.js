import { random } from './utils.js'
import { stickers, songs } from './config.js'

import {
	isEidalFitr,
	isEidalAdha,
	isDiwali,
	isHalloween,
	isChristmas,
	isNewYear,
	isFriendshipDay
} from './festivals.js'

import { aboutFestivals } from './data/messages.js'
import { sendSticker, sendMessageSeries, sendMessage } from './api/telegram.js'

async function main() {
	let series
	if (isEidalFitr()) series = 'eidalfitr'
	else if (isEidalAdha()) series = 'eidaladha'
	else if (isDiwali()) series = 'diwali'
	else if (isHalloween()) series = 'halloween'
	else if (isChristmas()) series = 'christmas'
	else if (isNewYear()) series = 'newyear'
	else if (isFriendshipDay()) series = 'friendship'

	if (series) {
		console.log(`Festival: ${series}`)
		if (series === 'friendship') {
			await sendMessage(random(songs[series]))
			await sendMessageSeries(random(aboutFestivals[series]))
			return true
		}

		const stickerArr = stickers[series]
		if (stickerArr && stickerArr.length > 0) await sendSticker(random(stickerArr))
		await sendMessageSeries(random(aboutFestivals[series]))
		return true
	}
	console.log('No festival')
}

main()
