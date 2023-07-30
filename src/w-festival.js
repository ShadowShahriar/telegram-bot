import { random } from './utils.js'
import { stickers } from './config.js'
import { isEidalFitr, isEidalAdha, isDiwali, isHalloween, isChristmas, isNewYear } from './festivals.js'
import { aboutFestivals } from './data/messages.js'
import { sendSticker, sendMessageSeries } from './api/telegram.js'

async function main() {
	let series
	if (isEidalFitr()) series = 'eidalfitr'
	else if (isEidalAdha()) series = 'eidaladha'
	else if (isDiwali()) series = 'diwali'
	else if (isHalloween()) series = 'halloween'
	else if (isChristmas()) series = 'christmas'
	else if (isNewYear()) series = 'newyear'

	if (series) {
		const stickerArr = stickers[series]
		if (stickerArr && stickerArr.length > 0) await sendSticker(random(stickerArr))
		await sendMessageSeries(random(aboutFestivals[series]))
		return true
	}
	console.log('No festival')
}

main()
