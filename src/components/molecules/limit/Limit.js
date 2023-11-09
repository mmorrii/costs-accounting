import "./style.css";
import Title from "../../atoms/title/Title";
import Input from "../../atoms/input/Input";

export default function Limit({ maxValue, onChangeHandler }) {
	return (
		<div className="costs-limit">
			<Title
				classTitle="costs-limit__title"
				content="Лимит"
			/>
			<Input
				classTitle={null}
				id="limit"
				type="number"
				valueData={maxValue}
				onChangeHandler={onChangeHandler}
				onFocusHandler={null}
			/>
		</div>
	)
}