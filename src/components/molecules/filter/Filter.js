import "./style.css";
import Title from "../../atoms/title/Title";
import Select from "../../atoms/select/Select";

export default function Filter({ onChangeYearSelection }) {
	return (
		<div className="costs-filter">
			<Title
				classTitle="costs-filter__title"
				content="Выбор По Году"
			/>
			<Select onChangeYearSelection={onChangeYearSelection}/>
		</div>
	)
}