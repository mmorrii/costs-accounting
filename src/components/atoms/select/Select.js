import "./style.css";
import { options } from "../../../utils/selectOptions";

export default function Select({ onChangeYearSelection }) {
	const valuesOptions = options.map(valueOption =>
		<option
			key={valueOption}
			value={valueOption}
		>{ valueOption }</option>
	)
	
	const yearChangeHandler = (event) => {
		onChangeYearSelection(event.target.value)
	}
	
	return (
		<>
			<select onChange={yearChangeHandler} >
				{ valuesOptions }
			</select>
		</>
	)
}