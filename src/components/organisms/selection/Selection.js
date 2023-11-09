import "./style.css";
import Limit from "../../molecules/limit/Limit";
import Filter from "../../molecules/filter/Filter";

export default  function Selection({ onChangeYearSelection, maxValue, onChangeHandler }) {
	return (
		<div className="costs-selection">
			<Limit
				maxValue={maxValue}
				onChangeHandler={onChangeHandler}
			/>
			<Filter onChangeYearSelection={onChangeYearSelection} />
		</div>
	)
}