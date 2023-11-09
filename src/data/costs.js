const INITIAL_COSTS = [
	{
		id: "c1",
		date: new Date(2020, 2, 12),
		description: "Холодильник",
		price: 999
	},
	{
		id: "c2",
		date: new Date(2021, 11, 2),
		description: "MacBook",
		price: 1249.99
	},
	{
		id: "c3",
		date: new Date(2023, 5, 28),
		description: "Джинсы",
		price: 25
	},
]

// добавление обьектов массива в local storage
const costs = [...INITIAL_COSTS]
// let costsStorage = []
for (let i = 0; i < costs.length; i++) {
	let key = JSON.stringify(costs[i].id)
	localStorage.setItem(key, JSON.stringify(costs[i]))
	// costsStorage.push(JSON.parse(localStorage.getItem(key)))
}

// console.log(costsStorage)

export {INITIAL_COSTS}