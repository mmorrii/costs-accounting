import "./style.css";
import {useState} from "react";
import {currentYear} from "../../../utils/selectOptions";
import Diagram from "../../molecules/diagram/Diagram";
import Selection from "../../organisms/selection/Selection";
import List from "../../organisms/list/List";
import Total from "../../molecules/total/Total";

export default function Costs({ costs, deleteItemHandler }) {
	const [selectedYear, setSelectedYear] = useState(currentYear.toString())
	const [maxValue, setMaxValue] = useState("500")
	
	// фильтрация массива по дате
	const costFiltered = costs.filter(item =>
		item.date.getFullYear().toString() === selectedYear
	)
	const yearChangeHandler = (year) => {
		setSelectedYear(year)
	}
	const onChangeHandler = (event) => {
		setMaxValue(event.target.value)
	}
	
	// получаем в массив отфильтрованные прайсы и
	// суммируем их, преобразуя в число
	const filteredPrices = costFiltered.map( item => item.price)
	let totalPrice = filteredPrices.reduce((acc, current) => acc + Number(current), 0)
	
	return (
		<div className="costs">
			<Selection
				maxValue={maxValue}
				onChangeYearSelection={yearChangeHandler}
				onChangeHandler={onChangeHandler}
			/>
			<Diagram
				costFiltered={costFiltered}
				maxValue={maxValue}
			/>
			<Total totalPrice={totalPrice} />
			<List
				costFiltered={costFiltered}
				deleteItemHandler={deleteItemHandler}
			/>
		</div>
	)
}