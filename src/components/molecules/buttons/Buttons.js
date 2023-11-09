import "./style.css"
import Button from "../../atoms/button/Button";

export default function Buttons({ onClickHandler }) {
	return (
		<div className="new-cost__actions">
			<Button
				type="submit"
				content="Добавить Расход"
				onClickHandler={null}
			/>
			<Button
				type="button"
				content="Отмена"
				onClickHandler={onClickHandler}
			/>
		</div>
	)
}