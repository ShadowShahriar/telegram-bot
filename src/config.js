const user = [['Shadow', 'Shahriar'], ['শাহ্‌রিয়ার']]

const script = {
	books: {
		recordName: 'lastSuggestedBook',
		recordMax: 15,
		resultMax: [2, 3],
		authorMax: 2
	},
	night: {
		recordName: 'lastStyle',
		exclude: ['27-May', '28-May', '24-Oct', '25-Oct', '26-Oct']
	},
	cheerup: {
		recordName: 'lastComment',
		recordMax: 20
	},
	chore: {
		recordName: 'lastChore',
		recordMax: 9
	},
	youtube: {
		recordName: 'lastYouTubeStyle',
		recordMax: 6
	},
	reminderDrawing: {
		recordName: 'lastDrawingReminderStyle',
		recordMax: 4
	},
	reminderWriting: {
		recordName: 'lastWritingReminderStyle',
		recordMax: 5
	},
	bday: {
		lookAhead: 7
	},
	moment: {
		recordName: 'lastMoment',
		recordMax: 14,
		directory: 'moments',
		fileMax: 78,
		fileExt: 'jpg'
	}
}

const query = {
	quotable: [
		'science',
		'technology',
		'friendship',
		'friend',
		'friends',
		'life',
		'wisdom',
		'philosophy',
		'famous-quotes'
	],
	tenor: {
		sketch: ['anime-sketching', 'anime-drawing'],
		story: [
			'excited-anime-boy',
			'anime-boy-thumbs-up',
			'anime-boy-happy',
			'anime-boy-smile',
			'all-the-best',
			'thumbs-up',
			'anime-boy-writing',
			'anime-boy-reading',
			'anime-reading',
			'anime-boy-cheering',
			'anime-boy-clapping',
			'anime-boy-yay'
		]
	},
	unsplash: ['cat', 'cats', 'birds', 'flower', 'flowers', 'sunset', 'anime'],
	pexels: {
		photo: ['sleeping cat', 'sleepy cat'],
		video: ['nature', 'cat', 'flowers', 'tabby cat', 'orange cat', 'starry night', 'galaxy']
	}
}

const stickers = {
	diwali: [
		'CAACAgIAAxUAAWSIRSgFbzTqcYNN3ZddqgLUMVSHAALkAQACFkJrConmkBp4wKpBLwQ',
		'CAACAgIAAxUAAWSISTykCBsO8IjAgMDYhNjTbaCBAAJyEgACRuWpSPJMG0U-1wNRLwQ'
	],
	halloween: [
		'CAACAgIAAxUAAWSEh-arfxcf-eOIR3suFGoUR0sgAAJJAANBtVYMYBNDpjyPw4AvBA',
		'CAACAgIAAxUAAWSIJki1KhAmvvxzduU1gJgxznfxAAK2BQACP5XMCs4GMOeQrNxqLwQ',
		'CAACAgIAAxUAAWSZ-KCIFX1AoLSoCvze_z6SkdKnAAJuAAOtZbwUmdKVOaHouYcvBA'
	],
	christmas: [
		'CAACAgIAAxUAAWSIRSjOPkQoV7pdwNtXnb3j4ihgAALiAQACFkJrCvvtCc2W24CILwQ',
		'CAACAgIAAxUAAWSZ8QqvBNi3E4azo7h4yL8WhA8PAAIFAQACzhp2C25xpVHBMFjdLwQ'
	],
	newyear: [
		'CAACAgIAAxUAAWSIRlJ339sQ6q0ZXa9T76xpYCtBAAJmAAPb234AAZPMw9ANLY9sLwQ',
		'CAACAgIAAxUAAWSZ8Qoct2fGa-Di5SdCxOVHpSa0AAISAQACzhp2CybLcQgz7jTaLwQ'
	]
}

const songs = {
	friendship: [
		'https://youtu.be/-lgDyoWGCa4',
		'https://youtu.be/WOi1HgpxEmM',
		'https://youtu.be/yZ-RyC1b1sw',
		'https://youtu.be/Z8N3kpRSk0M',
		'https://youtu.be/O1HOn-KckDc',
		'https://youtu.be/kvxMdwiZOv8',
		'https://youtu.be/sZdmkif8CSY',
		'https://youtu.be/EatzcaVJRMs',
		'https://youtu.be/tmLBITpyxPc',
		'https://youtu.be/oRjHv3jK6Uc',
		'https://youtu.be/-z_UvHknyrc',
		'https://youtu.be/xC1cj9zhh6k',
		'https://youtu.be/BTRPBiE_1lA',
		'https://youtu.be/xLUCo7lhnxE',
		'https://youtu.be/LpGhUuxRgDs'
	]
}

export { user, query, script, stickers, songs }
