import fetch from 'node-fetch'

async function obtainMemes() {
	const url = `https://api.imgflip.com/get_memes`
	const response = await fetch(url)
	const data = await response.json()
	return data.data.memes.map(i => {
		return {
			caption: i.name,
			meme: i.url,
			gif: Boolean(/.gif$/g.test(i.url))
		}
	})
}

export default obtainMemes
