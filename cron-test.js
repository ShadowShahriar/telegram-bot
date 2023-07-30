import { months } from './src/utils.js'
const DATE = 25
const MONTH = 'Oct'
const YEAR = 2023
const HOUR = 19
const MINUTE = 0

const today = new Date(YEAR, months.short.indexOf(MONTH), DATE, HOUR, MINUTE, 0)
const pad = n => `${n}`.padStart(2, '0')

const BN =
	pad(today.getHours()) +
	':' +
	pad(today.getMinutes()) +
	' | ' +
	pad(today.getDate()) +
	' ' +
	months.short[today.getMonth()] +
	' ' +
	today.getFullYear()

const UTC =
	pad(today.getUTCHours()) +
	':' +
	pad(today.getUTCMinutes()) +
	' | ' +
	pad(today.getUTCDate()) +
	' ' +
	months.short[today.getUTCMonth()] +
	' ' +
	today.getUTCFullYear()

console.log(`BAN: ${BN}`)
console.log(`UTC: ${UTC}`)
