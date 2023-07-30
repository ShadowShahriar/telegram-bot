import { random } from './utils.js'
import { sendGIF, sendPhoto } from './api/telegram.js'
import obtainMemes from './api/imgflip.js'

async function main() {
	console.time()
	const memes = await obtainMemes()
	const { meme, caption, gif } = random(memes)
	if (gif) await sendGIF(meme, caption)
	else await sendPhoto(meme, caption)
	console.timeEnd()
}

main()
