import "./style.css"

export default function Input({ type, valueData, onChangeHandler, id, classTitle, onFocusHandler }) {
	return <input
		className={classTitle}
		id={id}
		type={type}
		value={valueData}
		onChange={onChangeHandler}
		onFocus={onFocusHandler}
	/>
}