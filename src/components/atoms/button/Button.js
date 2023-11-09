import "./style.css"

export default function Button({ content, type, onClickHandler }) {
	return <button
		type={type}
		onClick={onClickHandler}
	>{ content }</button>
}