import { user } from '../config.js'

const me = [
	[user[0][0], user[0][1], 'Bro', 'Brother', 'Vai', 'Vi', 'Dst', 'Bondhu', 'Dude', 'Friend'],
	[user[1][0], 'ভাই', 'দোস্ত', 'ব্রো']
]

const modules = [
	[
		`Accha ${user[0][1]} ami ekhon ghumai, kalke kotha hobe`,
		`Accha ${user[0][1]} ami ekhon ghumai`,
		'Tmio raat er ghum ta dao',
		'Maa bolen raat er ghum na dile mejaj kharap thake ar poralekhay mon boshe na'
	],
	[
		`আচ্ছা ${user[1][0]}, আমি এখন ঘুমাই, কালকে কথা হবে`,
		`আচ্ছা ${user[1][0]}, আমি এখন ঘুমাই`,
		'তুমিও রাতের ঘুমটা দাও',
		'মা বলেন রাতের ঘুম না দিলে মেজাজ খারাপ থাকে আর পড়াশোনায় মন বসে না'
	]
]

const aboutNight = {
	single: [['Night', 'Good night'], ['শুভ রাত্রি'], ['😪', '🥱', '😴']],
	twopart: [
		[
			['Accha ami ghumay pori', 'Tmio ghumay poiro'],
			['Accha ami ghumiye pori', 'Tmio ghumiye poiro'],
			['Ami gelam ghumate', 'Tmio shue poro'],
			[modules[0][0], 'Tmio ghumiye poiro'],
			[modules[0][0], 'Tmio beshi raat koiro na'],
			[modules[0][0], 'Tmio beshi deri koiro na'],
			[modules[0][0], 'Tmio raat er ghum ta dao'],
			[modules[0][0], modules[0][2], 'Raat er ghum important'],
			[modules[0][0], modules[0][2], 'Ghum complete na hole abar sick hoye jaba'],
			[modules[0][0], modules[0][2], modules[0][3]],
			[modules[0][1], 'Tmi parle ekhon e ghumay jao', 'Beshi deri koiro na']
		],
		[
			['আচ্ছা আমি ঘুমায় পড়ি', 'তুমিও ঘুমায় পইড়ো'],
			['আচ্ছা আমি ঘুমিয়ে পড়ি', 'তুমিও ঘুমিয়ে পড়ো'],
			['আমি গেলাম ঘুমাতে', 'তুমিও শুয়ে পড়ো'],
			[modules[1][0], 'তুমিও ঘুমিয়ে পড়ো'],
			[modules[1][0], 'তুমিও বেশি রাত কইরো না'],
			[modules[1][0], 'তুমিও বেশি দেরি কইরো না'],
			[modules[1][0], 'তুমিও রাতের ঘুমটা দাও'],
			[modules[1][0], modules[1][2], 'রাতের ঘুম important'],
			[modules[1][0], modules[1][2], 'ঘুম complete না হলে পরের দিন energy পাবা না'],
			[modules[1][0], modules[1][2], modules[1][3]],
			[modules[1][1], 'তুমি পারলে এখনই ঘুমিয়ে যাও', 'বেশি দেরি কইরো না']
		]
	]
}

const init = [
	[
		'Yo',
		'Hey',
		'Bro',
		'Dude',
		'Hi',
		user[0][0],
		user[0][1],
		'Vai',
		'Bhai',
		'Dost',
		'Oi',
		'Yaar',
		'Bondhu',
		'Shuno',
		'Accha',
		'Accha shuno',
		'Okay listen',
		'Hey listen'
	],
	[
		'ভাই',
		'শোন',
		'আচ্ছা',
		'আচ্ছা শুন',
		'আচ্ছা শুনো',
		'অ্যাই শুনো',
		'দোস্ত',
		user[1][0],
		'বন্ধু',
		'আছো',
		'অ্যাই শুন!',
		'ভাই আছো?'
	]
]

const aboutBooks = (title, author, particle) => {
	const sTitle = `<b>${title}</b>`
	const bAuthor = `${author}'${particle.replace('-', '')}`
	return [
		[
			[
				`Have you already read ${sTitle} by ${author}?`,
				"If you haven't, you should definitely checkout this book! 😄"
			],
			[
				`Have you read ${sTitle} by ${author} yet?`,
				"If not, I highly recommend checking out this book! It's definitely worth your time 😄"
			],
			[
				`If you haven't already, you absolutely must read ${sTitle} by ${author}!`,
				"Trust me, it's an excellent book that you won't regret spending your time on 😄"
			],
			[`${sTitle} by ${author} is a must-read book that won't disappoint! 😄`],
			[`Kokhono free-time paile ${bAuthor} ${sTitle} pore deikho`, 'Asha kori valo lagbe tmr']
		],
		[
			[`${sTitle} পড়েছো? না পড়ে থাকলে একবার পড়ে দেখতে পারো। আশা করি তোমার ভালো লাগবে 😄`],
			[`${author}-র ${sTitle} বইটা পড়েছো? না পড়ে থাকলে একবার পড়ে দেখতে পারো। ভালো লাগবে 😄`],
			[`আজকাল বইটই পড়ার সময় পাও?`, `সময় পেলে একবার ${sTitle} পড়ে দেখো 👀`],
			[`${sTitle} পড়েছো?`, 'না পড়ে থাকলে একবার পড়ে দেখতে পারো', 'আশা করি তোমার ভালো লাগবে 😄'],
			[`কখনো সময় পেলে ${sTitle} পড়ে দেখো`, `রাইটার- ${author}`]
		]
	]
}

const aboutBookCover = [
	[
		["Sorry, I don't have the book cover right now"],
		["Unfortunately, I don't currently have access to the book cover"],
		["I'm sorry, but I don't currently have the book cover available"]
	],
	[
		['Sorry, আসলে এই মুহূর্তে আমার কাছে বইয়ের কভারটা নেই। থাকলে ছবি তুলে দিতাম'],
		['আমার কাছে বইয়ের কভারটা নেই। থাকলে ছবি দিতাম']
	]
]

const aboutBirthday = [
	['Happy Birthday, bro! 🤗'],
	['Happy Birthday, dude!'],
	[`Happy Birthday, ${user[0][0]}! 🥰`],
	['Heyyyyyy~ Happy Birthday! 🎉🎉'],
	['Happiest birthday brother! ✨'],
	[`Happy Birthday, ${user[0][1]}! 😄`],
	['🍰', 'Here, have some cake'],
	['শুভ জন্মদিন বন্ধু! 🎉'],
	['শুভ জন্মদিন 😄'],
	[`Yo. Happy Birthday, ${user[0][1]} 🍰`],
	['Happy Birthday, my friend 😊🌻'],
	['🎂', 'নে কেক খা!'],
	['🍫', 'চকলেট খাবি? 😁'],
	['জন্মদিনের অনেক অনেক শুভেচ্ছা'],
	['জন্মদিনের শুভেচ্ছা']
]

const aboutMotivation = [
	['Take a deep breath'],
	["It's okay dear. You are doing great!"],
	['You are doing great! ✨'],
	['You are great! 🌟'],
	['You are trying your best'],
	['you are enough'],
	['i love u'],
	['i ❤ u'],
	['you are good enough'],
	["You're on fire 🔥"],
	["Don't stress. Forgive and forget."],
	["It's okay to take breaks"],
	["It's okay to slow down a bit"],
	['It will be okay 🤗'],
	["I don't really know what you are going through right now, but believe me... things will be better over time."],
	['U good?'],
	['How are you?'],
	['I hope you are doing your best to keep things sane 😄'],
	['I know you are trying your best to keep things sane 😄'],
	['how r u?'],
	['How are you doing?'],
	['Hope you are doing well, my friend! 💛'],
	['How are you today?'],
	["Heyyy~ How're you?"],
	['Your work is awesome 🙌'],
	["it isn't u."],
	['You are doing pretty well, and I know you can do even better'],
	['You are getting better every day ✌'],
	["Don't be so hard on yourself! 😥"],
	["That's some good progress there! 😎👏"],
	['Be the most attentive person in this distracted world.'],
	['Be the most attentive person in this distracted world. I know you can do that!'],
	[user[0][0], 'is this really the best you can do?'],
	['You are responsible for your happiness'],
	['You may not be the best', 'but you can give your best', 'to be one of the best! ✨'],
	['Control your emotions, please... 😟'],
	['a lot of people care about you...'],
	['Feel happy just for existing in a world full of wonders and opportunities.......'],
	['we are rooting for you!'],
	["hope you're doing well 🙂"],
	['Enjoy every moment of your life! ✨'],
	[
		'You may or may not be in the best situation right now,,,,',
		'but i know,',
		'you will overcome these barriers pretty soon! 🤗'
	],
	['You may or may not be in the best situation right now,,,,', 'but i know,', 'things will get better! 🤗'],
	['be kind to yourself 🌸🌸🌸'],
	['live in the moment. be present'],
	["don't wanna make ur mom proud????"],
	['think before you say, dude 😉'],
	['express gratitude for the little things,,,,', "it's the little things that matter 😄💛"],
	["It's okay dear ✨"],
	['you good?'],
	['Hang in there, buddy!'],
	["don't stress it too much 😬"],
	['take a walk'],
	['ভাই একটু রেস্ট নে'],
	['whatsup?'],
	['whassupp?'],
	['ki obostha?'],
	["what's going on? 😁"],
	['what are you up to? 👀'],
	['A stitch in time saves nine. সময়ের কাজ সময় থাকতে করে ফেলো'],
	['যে যা বলার বলুক!'],
	[
		'যে যা বলার বলুক,,,,',
		'তুমি জানো তোমার পথ সঠিক। আরে অন্যদেরও তো অধিকার আছে নিজের মতো করে বিচার-বিবেচনা করার, তাই না?'
	],
	[
		'যে যা বলার বলুক না! তাতে কি হইসে???',
		'তুমি তো জানো তোমার পথ সঠিক',
		'আরে ভাই অন্যদেরও তো অধিকার আছে নিজের মতো করে বিচার-বিবেচনা করার, তাই না?'
	],
	['just go outside and গায়ে একটু হাওয়া লাগিয়ে আসো'],
	['just go outside and গায়ে একটু হাওয়া লাগিয়ে আসো', 'mind refresh হয়ে যাবে 😄'],
	['একটু রেস্ট নাও, দাদা!'],
	[`ektu rest niso, ${user[0][1]}?`],
	['ki khobor dada?'],
	['kire?', 'ki khobor dada?', 'kemon achen?'],
	['কী খবর দাদা? ভালো আছেন?'],
	['কী দাদা? কেমন চলে দিনকাল?'],
	['কেমন চলে দিনকাল?'],
	['দিনকাল কেমন কাটছে?'],
	["don't stress it too much 😓"],
	['you are ENOUGH', 'you are GOOD enough', 'AND you WILL become even better!'],
	['i hope you are trying your best to make this day a great one!'],
	['নিজের নামের অর্থ সার্থক করতে হবে দোস্ত!'],
	['সময় পেলে Murder Drones ওয়েব সিরিজটা একবার দেখে আসতে পারো। ভালো লাগবে 😄'],
	['Murder Drones-এর নতুন কোনো সিজন বেরিয়েছে নাকি? একবার খোঁজ নিও তো! 👀'],
	['অ্যাই!', 'আজকে Dice Media-র Operation MBBS ওয়েব সিরিজটা দেখলে কেমন হয়? 😃'],
	['অ্যাই!', 'চলো না আজকে Dice Media-র Operation MBBS ওয়েব সিরিজটা দেখি? 😃'],
	['অ্যাই!', 'FilterCopy-র Bro-Founders ওয়েব সিরিজটার কথা মনে আছে? 😃', 'চল না আজকে ওইটা আবার দেখি!'],
	['Wanna watch "Ghost Friend" with me on YouTube? 👻'],
	['learn from your miskates', '*mistakes'],
	['the worst mistake you can make by not making a miskate...', 'damn autoorrect 🤦🏼‍♂️', '*mistake']
]

const aboutChore = [
	['Today is a great day to check the e-mails, right?'],
	['It feels like a good day to read some e-mails! 😄'],
	['আজকে ঘরটা একটু গুছিয়ে ফেললে কেমন হয়? 😁'],
	['আজকে পড়ার টেবিলটা গুছিয়ে ফেলে আম্মুকে surprise করে দিও! ✨'],
	['ল্যাপটপে ধূল জমেছে, পারলে একটু পরিষ্কার করে ফেলো'],
	['সময় পেলে ঘরটা একটু গুছিয়ে ফেল, ঠিক আছে? 😊'],
	['আজকে পড়তে বসেছ? 😒😒'],
	['I think you should study for the exams'],
	['Did you study today?'],
	["Did you forget to complete today's lesson? 👀"],
	['ভাই!', 'তোর না সামনে পরীক্ষা???', 'আজকে পড়তে বসেছস?'],
	['ভাই তোর পড়া কমপ্লিট?'],
	['দোস্ত', 'তোর কিন্তু সামনে পরীক্ষা', 'পড়াশোনা কিছু বাকি থাকলে গুছিয়ে ফেলিস'],
	['পড়াশোনা করি আজকে? 😄'],
	['পড়াশোনা done? 👀'],
	['khabar khaiso?'],
	['did you have your food?'],
	['নাস্তা করেছিলে? 🥪'],
	['নাস্তা করো নাই? 🥞']
]

const aboutQuote = (author, topic, tag) => {
	const famous = [`Here is a famous quote by ${author}`, `Here is a quote about ${topic} by ${author}`]
	return [
		`হঠাৎ করে ${author}-র এই উক্তিটা মনে পড়ে গেল —`,
		`${author} once said,`,
		`${author}-র এই কথাটা আগে শুনেছ?`,
		`Here is a quote by ${author} —`,
		tag.includes('famous') ? famous[0] : famous[1],
		`Did you know that ${author} said,`
	]
}

const aboutQuoteEnd = [
	['তাই না?'],
	['Right?'],
	['ঠিক না?'],
	['কথাটা কিন্তু জোস!', 'তাই না?'],
	['তাই না রে?'],
	[`তাই না, ${user[1][0]}?`],
	['Right, no?'],
	['সেই না?'],
	['সেইরকম একটা কথা!'],
	['mind blown!'],
	['ভাইরে ভাই সেইই একটা কথা! 🤩'],
	['কথাটা আমাকে ভাবিয়ে তুলে...'],
	["Isn't it?"]
]

const aboutPhoto = [
	'I hope this photo makes your day ✨',
	'Hopefully this photo will make your day',
	"I know you'll like this photo 🤭",
	'See what I found today 👀',
	'এই দেখো! 👀',
	'দেখো আজকে নেট দেখতে গিয়ে কী পেলাম! 😄 সুন্দর না?',
	'ছবিটা কিন্তু জোস!',
	'এই নাও'
]

const aboutVideo = [
	'I hope this will make your day ✨',
	'Hopefully this clip will make your day',
	"I know you'll like this 🤭",
	'Your daily dose of Internet 👀',
	'এই দেখো! 👀',
	'দেখো আজকে নেট দেখতে গিয়ে কী পেলাম!',
	'জোস না?',
	'এই নাও',
	'Funny, no?',
	'Cool, no?',
	"Cool, isn't it?"
]

const aboutYouTube = [
	['ভাই এইটা জোস! 😆'],
	['এটা দ্যাখ! 👀'],
	['এটা দেখো, ভালো লাগবে'],
	['এইটা দেইখো', 'ভালো লাগবে 😊'],
	['ভাই', 'এইটা দেখেন', 'মন ভালো হইয়া যাইব 😁'],
	['Look at this! 👀'],
	['এই ভিডিওটার কথা মনে আছে?', 'চলো না একসাথে দেখি?'],
	['মনে আছে আমাকে এই ভিডিওটার কথা বলেছিলা?', 'আজকে দেখলাম, ভালোই লাগলো 😊'],
	['This is gold'],
	['I think you will like it 😄'],
	["Thought you'd like it..."],
	['Check this out!']
]

const aboutReminder = {
	drawing: [
		['আজকে ছবি আঁকবে?'],
		['আজকে নতুন কোন ছবি আঁকবে?'],
		['আজকে ছবি আঁকার প্ল্যান করছো নাকি?'],
		['অনেকদিন নতুন কোন ছবি আঁক না ভাই...'],
		['New drawing when?? 👀'],
		['New illustration when?? 👀'],
		['আমাকে একটা ছবি এঁকে দাও না! 😭😭'],
		['আমার আর্টওয়ার্ক কই?! 😒😒']
	],
	writing: [
		[`${user[1][0]} আছো নাকি?`, 'নতুন কোন গল্প লেখার আইডিয়া মাথায় এসেছে নাকি?'],
		['আছো?', 'গল্প লেখার কথা মনে আছে তো? 👀'],
		['যা, গল্প লেখ! আবার ভুলে যাবি, 😒', 'পারলে at least প্লট লাইনগুলো খাতায় টুকে রাখ!'],
		['Complete the stories dear! 💛'],
		[user[1][0], 'আছো?', 'গল্প লেখো'],
		['Heyy~', 'Are you writing a new story?'],
		['কি ভাই! গল্প লিখছো নাকি?'],
		['Write that story, dude! 👊🏼'],
		['ভাই', 'আছো?', 'গল্প লেখো'],
		['All the best for writing your new story. I hope people would love to read it! 😊'],
		["Don't forget to write the story and show me! 😁"]
	]
}

const aboutFestivals = {
	eidalfitr: [
		['🌙', 'Ramadan Mubarak'],
		['Happy Ramadan, vai'],
		['Ramadan Mubarak vai 😊'],
		['Ramadan Kareem vai 🌙'],
		['রমজান মোবারক, ভাইয়া 😊'],
		['ঈদ-উল ফিতরের অনেক অনেক শুভেচ্ছা! 😊']
	],
	eidaladha: [
		['Eid Mubarak 🌙'],
		['ঈদ মোবারক! 🌙'],
		["ঈদ-উল আয'হা-র অনেক অনেক শুভেচ্ছা! 😊"],
		["তোমাকে ঈদ-উল আয'হা-র অনেক অনেক শুভেচ্ছা! 😊"],
		["ভাই, তোমাকে ঈদ-উল আয'হা-র অনেক অনেক শুভেচ্ছা! 😊"]
	],
	diwali: [['Happy Diwali! ✨']],
	halloween: [['Happy Halloween! 😁']],
	christmas: [['Merry Christmas 🎄'], ['বড়দিনের শুভেচ্ছা 🎄']],
	newyear: [[`Happy New Year ${new Date().getFullYear() + 1}! 🎉`]],
	friendship: [
		['Happy Friendship Day! 🌻'],
		['ভাই, তোমাকে বন্ধু দিবসের অনেক অনেক শুভেচ্ছা! 😊'],
		['বন্ধু দিবসের অনেক অনেক শুভেচ্ছা! 😊']
	]
}

const aboutMore = [
	[
		'Also,',
		"Wait there's more...",
		"And there's more...",
		'Plus,',
		'Besides',
		'And not only that!',
		"I'm not done yet,"
	],
	['আর', 'আবার', 'তাছাড়া', 'এছাড়াও', 'ওয়েট, আরো বাকি আছে...']
]

const aboutDate = {
	birthday: {
		today: ({ l, lWP, lWS, P_BN, P, q1, q2, q3, q4, Y, W_Y, Pz }) => [
			[
				[
					[`Today is ${q1}`, `Your ${lWS} birthday!`],
					[`Ajke ${q2}`, `Tomar ${lWP} birthday!`],
					[`Ajke ${q3}`, `Tomar ${lWP} birthday!`],
					[`Ajke ${q4}`, `Tomar ${lWP} birthday!`],
					[`Today is your ${lWS} birthday!`],
					[`Your ${l} turns ${W_Y} today!`],
					[`Your ${l} turns ${Y} today!`],
					[`Today your ${l} is turning ${W_Y}!`],
					[`Did you forget that today is ${q1}?`, `Oh boy, today is your ${lWS} birthday!`],
					[`Ajke tomar ${lWP} birthday!`]
				],
				[
					[`Wish ${P} now!`],
					[`Wish ${P} before it's too late...`],
					[`Did you wish ${P}?`],
					[`${P_BN} wish korecho?`],
					[`Wish korecho ${P_BN}?`],
					[`Don't forget to wish ${P}`],
					["Let's make their birthday more memorable together!"]
				]
			],
			[
				[
					[`আজকে ${q1}`, `তোমার ${lWP} বার্থডে!`],
					[`আজকে ${q2}`, `${lWP} জন্মদিন!`],
					[`আজকে তোমার ${lWP} ${Y}তম জন্মদিন!`],
					[`আজকে তোমার ${lWP} জন্মদিন!`],
					[`আজ ${q3}`, `${lWP} জন্মদিন!`],
					[`মনে আছে আজকে যে ${q4}?`, `আরেহ! আজকে ${lWP} জন্মদিন!`],
					[`জানো আজকে যে একটা স্পেশাল দিন?`, `আরেহ! আজকে ${lWP} জন্মদিন!`],
					[`আজকে একটা স্পেশাল দিন!`, 'কেনো জানো?', `আরেহ! আজকে ${lWP} জন্মদিন!`],
					[`আজকে ${q4}`, `${lWP} জন্মদিন!`]
				],
				[
					[`${Pz} জন্য গিফট রেডি করতে ভুলে যেও না কিন্তু! 👀`],
					[`${P} উইশ করেছো?`],
					[`${P} বার্থডে উইশ করেছো? 👀`],
					[`${P} বার্থডে উইশ করেছো তো? 👀`],
					[`${P} বার্থডে উইশ করার কথা মনে আছে তো? 👀`],
					[`${P} উইশ করেছো? এখনো উইশ করে না থাকলে তাড়াতাড়ি করে ফেলো`],
					[`${P} উইশ করার কথা ভুলে যেও না`],
					[`উইশ করেছো ${P}?`],
					[`${Pz} জন্য করা বার্থডে প্ল্যান রেডি তো? 😁`],
					[`${Pz} জন্য গিফট রেডি তো? 😁`],
					[`${Pz} জন্য গিফট প্ল্যান করেছো তো? 😁`],
					[`${Pz} জন্য গিফট রেডি করতে ভুলে যেও না! 👀`],
					[`${Pz} জন্য গিফট রেডি করেছো? 👀`],
					[`Sooo ${Pz} জন্য প্ল্যান কী? 👀`]
				]
			]
		],
		tomorrow: ({ l, lWP, lWS, P_BN, P, q1, q4, Pz }) => [
			[
				[
					[`Kalke ${q4}`, `Tomar ${lWP} birthday`],
					[`Tomorrow is your ${lWS} birthday`],
					[`Did you forget that tomorrow is your ${lWS} birthday?`],
					[`Tomorrow is the day! (your ${lWP} birthday)`],
					[`We don't have much time`, `Tomorrow is their birthday!`]
				],
				[
					[`Make sure to prepare the gift for ${P}`],
					[`Did you prepare the gift for ${P}?`],
					[`Don't forget to prepare the gift for your ${l}`],
					[`${P_BN} surprise deyar plan ready korecho?`],
					[`${P_BN} ki surprise diba seta plan korecho?`]
				]
			],
			[
				[
					[`কালকে ${q4}`, `তোমার ${lWP} জন্মদিন!`],
					[`কালকে কিন্তু ${q1}`, `তোমার ${lWP} বার্থডে!`],
					[`মনে আছে তো কালকে ${q4}?`, `আরেহ! কালকে তোমার ${lWP} জন্মদিন!`],
					[`কালকের দিনটা কিন্তু তোমার ${lWP} জন্য খুব special`, `কেনো? আরেহ! কারণ কালকে ${Pz} জন্মদিন!`],
					[`ভুলে যেও না কালকে কিন্তু তোমার ${lWP} জন্মদিন!`]
				],
				[
					[`${Pz} জন্য করা বার্থডে প্ল্যান রেডি তো? 😁`],
					[`${Pz} জন্য গিফট রেডি তো? 😁`],
					[`${Pz} জন্য গিফট প্ল্যান করেছো তো? 😁`],
					[`${Pz} জন্য গিফট রেডি করতে ভুলে যেও না! 👀`],
					[`${Pz} জন্য গিফট রেডি করতে ভুলে যেও না কিন্তু! 👀`],
					[`${Pz} জন্য গিফট রেডি করেছো? 👀`],
					[`হাতে একেবারেই সময় নাই!`, `${Pz} জন্য বার্থডে গিফট রেডি করে ফেইলো! ✨`],
					[`হাতে বেশি সময় নাই!`, `${Pz} জন্য বার্থডে গিফট রেডি করে ফেইলো! ✨`],
					[`Sooo ${Pz} জন্য প্ল্যান কী? 👀`]
				]
			]
		],
		upcoming: ({ lWP, lWS, P, Pz, q1, q2, q3, q4, R, W_R }) => [
			[
				[
					[`${q1} is your ${lWS} birthday`],
					[`${q4} tomar ${lWS} birthday`],
					[`Agami ${q4} tomar ${lWP} birthday`],
					[`Ar ${R} din por tomar ${lWP} birthday`],
					[`Mark ${q1} in your calendar because that's your ${lWS} birthday`],
					[`There are only ${W_R} days left before your ${lWS} birthday`]
				],
				[
					[`Don't forget to prepare the gift for ${P}! 👀`],
					[`Make sure to prepare the gift for ${P}! 👀`],
					[`We don't have plently of time`, `You should prepare the gift for ${P} ASAP! ✨`],
					[`We don't have much time`, `Prepare the gift for ${P} ASAP! ✨`],
					[`So, what are your plans for ${P}? 👀`]
				]
			],
			[
				[
					[`আগামী ${q4} তোমার ${lWP} বার্থডে`],
					[`আগামী ${q4} কিন্তু তোমার ${lWP} জন্মদিন`],
					[`আগামী ${q1} তোমার ${lWP} বার্থডে`],
					[`আগামী ${q1} কিন্তু তোমার ${lWP} জন্মদিন`],
					[`${q2} কিন্তু তোমার ${lWP} বার্থডে`],
					[`${q3} কিন্তু তোমার ${lWP} জন্মদিন`],
					[`আর ${W_R} দিন পর কিন্তু তোমার ${lWP} বার্থডে`],
					[`আর ${W_R} দিন পর তোমার ${lWP} জন্মদিন`],
					[`আর ${R} দিন পর তোমার ${lWP} জন্মদিন`],
					[`আর ${R} দিন পর কিন্তু তোমার ${lWP} বার্থডে`],
					[`তোমার ${lWP} জন্মদিনে কিন্তু আর মাত্র ${R} দিন বাকি`]
				],
				[
					[`${Pz} জন্য গিফট রেডি করতে ভুলে যেও না! 👀`],
					[`${Pz} জন্য গিফট রেডি করতে ভুলে যেও না কিন্তু! 👀`],
					[`সময় কিন্তু বেশি নাই!`, `${Pz} জন্য বার্থডে গিফট রেডি করে ফেইলো! ✨`],
					[`সময় বেশি নাই!`, `${Pz} জন্য বার্থডে গিফট রেডি করে ফেইলো! ✨`],
					[`Sooo ${Pz} জন্য প্ল্যান কী? 👀`]
				]
			]
		]
	},
	eventday: {
		today: ({ EVNT, P, Pz }) => [
			[
				[
					[`Do you know why today is a special day?`, `Because today ${EVNT}`],
					[`Today is a really special day`, `Why? Because today ${EVNT}`]
				],
				[
					['Now what can we do to make their day?'],
					[`Got any plans for ${P}?`],
					['Wanna do something about it?']
				]
			],
			[
				[
					[`জানো আজকে যে একটা স্পেশাল দিন?`, `কারণ আজকে ${EVNT}`],
					[`আজকে একটা স্পেশাল দিন`, `কেন? কারণ আজকে ${EVNT}`]
				],
				[
					[`${Pz} জন্য কিছু প্ল্যান করেছো?`],
					[`${Pz} জন্য প্ল্যান কী?`],
					[`${P} কোনো সারপ্রাইজ দেওয়ার প্ল্যান করছো নাকি?`]
				]
			]
		],
		tomorrow: ({ lWP, EVNT }) => [
			[
				[
					[
						`Ekta special karone kalker dinta tomar ${lWP} jonno khub ✨Special✨`,
						`Keno? Oita kalkei jante parba 🤭`
					],
					[`Remember, tomorrow ${EVNT}`]
				]
			],
			[
				[
					[
						`একটা স্পেশাল কারণে কালকের দিনটা তোমার ${lWP} জন্য খুব ✨Special✨`,
						`কেনো? সেটা কালকেই জানতে পারবা 🤭`
					],
					[`মনে রেখো, আগামীকাল ${EVNT}`]
				]
			]
		],
		upcoming: ({ R, W_R, q1, q2, q4, EVNT }) => [
			[[[`After ${W_R} days, it ${EVNT}`], [`It ${EVNT} on ${q1}`]]],
			[[[`আগামী ${q4} ${EVNT}`], [`${q2} ${EVNT}`], [`আর ${R} দিন পর ${EVNT}`]]]
		]
	},
	fndsince: {
		today: ({ l, lWP, Y, W_Y, QY, P, q1 }) => [
			[
				[
					['Do you know why I am so happy today?'],
					['You know why I am so happy today?'],
					['You wanna know why I am so happy today?']
				],
				[
					[`This is because ${q1} marks the day of ${Y} ${QY} of friendship of you and your ${l}`],
					[`I am so excited because you and your ${l} have been friends for over ${W_Y} ${QY}!`],
					[`Because I am celebrating ${Y} ${QY} of friendship of you and your ${l}`],
					[`Celebrating ${W_Y} ${QY} of friendship of you and your ${l}`]
				],
				[
					['I really love such great examples of friendship. You guys rock!'],
					[`Make sure to message ${P} and let ${P} know you remember it!`],
					[`Message ${P} and let ${P} know how special they are in your life!`],
					[`Message ${P} and let ${P} know how they have made your life special!`],
					['Stay blessed you guys!'],
					['God bless you guys!']
				]
			],
			[
				[['আজকে আমি অনেক খুশি! কেনো জানো?'], ['জানো আজকে আমি খুব খুশি'], ['জানো আজকে না আমি খুব খুশি 😄']],
				[
					[
						`কারণ ঠিক ${W_Y} বছর আগে এই দিনে তোমার সাথে তোমার ${lWP} ফ্রেন্ডশিপ হয়েছিলো`,
						`আশা করি ভুলে যাও নি! 🤭`
					],
					[`কারণ আজকে তোমার সাথে তোমার ${lWP} ফ্রেন্ডশিপের ${W_Y} বছর পূর্ণ হলো`]
				],
				[['মনে আছে ওদের সাথে কীভাবে দেখা হয়েছিলো? তোমাদেরকে নিয়ে নতুন কোনো গল্প লিখে ফেলবা নাকি?'], null]
			]
		],
		tomorrow: ({ l, lWP }) => [
			[[[`Tomorrow will be a special day for you and your ${l}`, 'Just saying 🤭']]],
			[[[`জানো? কালকের দিনটা তোমার ${lWP} আর তোমার জন্য খুব স্পেশাল 👀`, 'জাস্ট বললাম আরকি 🤭']]]
		],
		upcoming: ({ l, lWP, P, Pz, q1, q2 }) => [
			[
				[
					[`Mark the date ${q1} in your calendar`, 'Thank me later! 😉'],
					[`When was the last time you messaged ${l}?`],
					[`Last kobe ${lWP} sathe kotha bolechila?`],
					[`Tomar ${lWP} ke miss koro?`, `Last kobe ${Pz} sathe contact korechila?`]
				]
			],
			[
				[
					[`ক্যালেন্ডারে ${q2} দাগিয়ে রাখো`, 'সেদিন কিছু একটা স্পেশাল হবে ✨'],
					[`মনে আছে শেষ কবে তোমার ${l}কে মেসেজ দিয়েছিলা?`],
					[`লাস্ট কবে ${lWP} সাথে কথা বলেছিলা?`],
					[`লাস্ট কবে ${lWP} সাথে যোগাযোগ হয়েছিলো মনে আছে?`, `মিস করো ${P}?`]
				]
			]
		]
	}
}

const aboutMoment = [
	'Remember, bro?',
	'Remember this?',
	'কিছু মনে পড়লো?',
	'You remember, na?',
	'এটা মনে আছে?',
	'ভাই, মনে আছে?'
]

const aboutExam = [
	[
		['Vai, mone ache tw kalke je exam?', 'Ekhon beshi raat koiro na, jototuku pora hoyeche valo hoyeche'],
		['Kalker exam niye eto tension nio na', 'Ja hobe valoi hobe'],
		['Kalker exam er jonno pera nio na', 'Nijer upor confidence rakho'],
		[
			'Kalker exam er jonno proyojonio jinish-potro jemon pen, pencil, scale eshob guchiye niyecho tw?',
			'Lagle calculator tao sathe kore niye nio'
		],
		[
			'Exam er jonno pen, pencil, scale eshob age thekei guchiye rakho',
			'Ar ekhon shanti moto ekta ghum dao, tmr rest lagbe'
		],
		['Ajke valo vabe rest nilei na kalke valo kore likhte parbe', 'Ghumay jao']
	],
	[
		['ভাই, মনে আছে তো কালকে যে তোর এক্সাম?', 'এখন বেশি রাত করিস না, যতটুকু যা পড়েছিস ভালো করেই পড়েছিস'],
		['কালকের এক্সাম নিয়ে এতো টেনশন নিও না', 'যা হবে ভালোই হবে'],
		['কালকের এক্সামের জন্য প্যাড়া নিও না', 'নিজের উপর confidence রাখো'],
		[
			'কালকের এক্সামের জন্য প্রয়োজনীয় জিনিসপত্র যেমন- কলম, পেন্সিল, স্কেল এসব নিয়েছো তো?',
			'লাগলে ক্যালকুলেটরটাও সাথে করে নিয়ে নিও'
		],
		[
			'এক্সামের জন্য কলম, পেন্সিল, স্কেল এসব আগে থেকেই গুছিয়ে রাখো',
			'আর এখন শান্তি মতো একটা ঘুম দাও, তোমার রেস্ট দরকার'
		],
		['আজকে ভালো ভাবে রেস্ট নিলেই না কালকে ভালো করে লিখতে পারবে? নাকি?', 'ঘুমায় যাও']
	]
]

export {
	me,
	init,
	aboutChore,
	aboutBooks,
	aboutQuote,
	aboutQuoteEnd,
	aboutBookCover,
	aboutNight,
	aboutBirthday,
	aboutMotivation,
	aboutPhoto,
	aboutVideo,
	aboutYouTube,
	aboutReminder,
	aboutFestivals,
	aboutDate,
	aboutMore,
	aboutMoment,
	aboutExam
}
