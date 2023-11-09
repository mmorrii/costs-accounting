import "./style.css"
import DiagramBar from "../../atoms/diagram-bar/DiagramBar";

export default function Diagram({ costFiltered, maxValue }) {
	const dataBar = [
		{label: "Jan", value: 0},
		{label: "Feb", value: 0},
		{label: "Mar", value: 0},
		{label: "Apr", value: 0},
		{label: "May", value: 0},
		{label: "Jun", value: 0},
		{label: "Jul", value: 0},
		{label: "Aug", value: 0},
		{label: "Sep", value: 0},
		{label: "Oct", value: 0},
		{label: "Nov", value: 0},
		{label: "Dec", value: 0},
	]
	
	for (let item of costFiltered) {
		// получаем число месяца (начиная с 0)
		const costFilteredMonth = item.date.getMonth()
		dataBar[costFilteredMonth].value += item.price
	}
	
	// // создаем новый массив включающий только цены и
	// // выбираем наибольшую из них
	// const valuesArray = dataBar.map(item => item.value)
	// const maxValue = Math.max(...valuesArray)
	
	return (
		<div className="diagram">
			{ dataBar.map(item =>
				<DiagramBar
					key={item.label}
					value={item.value}
					maxValue={maxValue}
					label={item.label}
				/>
			)}
		</div>
	)
}