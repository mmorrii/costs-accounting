import "./style.css";
import Form from "../../organisms/form/Form";
import {useState} from "react";
import Button from "../../atoms/button/Button";

export default function NewCost({ onAddNewData }) {
	const [openPanel, setOpenPanel] = useState(false)
	
	const saveNewDataHandler = (inputData) => {
		const formData = {
			...inputData,
			id: Math.random().toString()
		}
		
		onAddNewData(formData)
	}
	const changeOpenPanelHandler = () => {
		setOpenPanel(true)
	}
	const closePanelHandler = () => {
		setOpenPanel(false)
	}
	
	return (
		<div className="new-cost">
			{ !openPanel ? (
				<Button
					type="button"
					content="Добавить Новый Расход"
					onClickHandler={changeOpenPanelHandler}
				/>
			) : (
				<Form
					// двусторонее привязывание
					onClickButtonHandler={closePanelHandler}
					// кастомный обработчик событий для передачи данных от дочернего элемента -> родителю
					onSaveNewData={saveNewDataHandler}
				/>
			)}
		</div>
	)
}