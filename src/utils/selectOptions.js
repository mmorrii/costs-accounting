let date = new Date()
let currentYear = date.getFullYear()
let options = [
	2023,
	2022,
	2021,
	2020,
	2019
]

if (options[0] !== currentYear) {
	options.unshift(currentYear)
}

export { options, currentYear }