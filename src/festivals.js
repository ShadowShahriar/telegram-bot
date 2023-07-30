/**
 * Get today's date with UTC offset.
 */
const getToday = () => new Date()

/**
 * Wrapper function around the `new Intl.DateTimeFormat`
 * constructor that retreives the date, month, and year from
 * a certain calender.
 * @param calendar a valid calendar name [(more info.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#ca)
 * @info https://jostrans.org/issue17/art_darani.php
 * @info https://stackoverflow.com/a/25207364
 */
const toCalendarDate = calendar => {
	const locale = `en-u-ca-${calendar}-nu-latn`
	const obtain = key => new Intl.DateTimeFormat(locale, { [key]: 'numeric' }).format(getToday())
	const date = +obtain('day')
	const month = +obtain('month')
	const year = +obtain('year').split(' ')[0]
	return { date, month, year }
}

/**
 * Get today's date using the `islamic-umalqura` calendar.
 */
const getIslamicDate = () => toCalendarDate('islamic-umalqura')

function isEidalFitr() {
	const { date, month } = getIslamicDate()
	return date === 1 && month === 10
}

function isEidalAdha() {
	const { date, month } = getIslamicDate()
	return date === 11 && month === 12
}

/**
 * Get today's date using the `indian` calendar.
 */
const getIndianDate = () => toCalendarDate('indian')

/**
 * Get today's moon phase.
 * @gist https://gist.github.com/endel/dfe6bb2fbe679781948c
 */
const getMoonPhase = () => {
	const today = getToday()
	const date = today.getDate()
	let month = today.getMonth()
	let year = today.getFullYear()

	let totalDaysElapsed = 0
	let phase = 0

	if (month < 3) {
		year--
		month += 12
	}
	++month

	const cycle = 365.25 * year
	const daysElapsed = 30.6 * month
	totalDaysElapsed = cycle + daysElapsed + date - 694039.09
	totalDaysElapsed /= 29.5305882

	phase = parseInt(totalDaysElapsed)
	totalDaysElapsed -= phase
	phase = Math.round(totalDaysElapsed * 8)

	if (phase >= 8) phase = 0
	return phase
}

function isDiwali() {
	const { date, month } = getIndianDate()
	const isKartik = !!(month === 8)
	const isNewMoon = !!(getMoonPhase() === 0)
	return (isKartik && date === 14) || (isKartik && isNewMoon)
}

const isDateMonth = (date, month) => {
	const today = getToday()
	return date === today.getDate() && !!(month === today.getMonth() + 1)
}

function isHalloween() {
	return isDateMonth(31, 10)
}

function isChristmas() {
	return isDateMonth(25, 12)
}

function isNewYear() {
	return isDateMonth(1, 1)
}

export { isEidalFitr, isEidalAdha, isDiwali, isChristmas, isHalloween, isNewYear }
