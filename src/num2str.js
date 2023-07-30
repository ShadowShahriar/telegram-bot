// === modified from https://stackoverflow.com/a/5530230 ===
const zero = 'zero'
const hundred = 'hundred'
const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const teens = [
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen'
]

function _hundreds(n) {
	if (n > 99) return ones[Math.floor(n / 100)] + ' ' + hundred + ' ' + _tens(n % 100)
	else return _tens(n)
}

function _tens(n) {
	if (n < 10) return ones[n]
	else if (n >= 10 && n < 20) return teens[n - 10]
	else return tens[Math.floor(n / 10)] + ' ' + ones[n % 10]
}

function num2str(n) {
	if (n === 0) return zero
	else return _hundreds(n).trim()
}

export default num2str
