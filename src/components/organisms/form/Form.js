import "./style.css"
import InputBlock from "../../molecules/input-block/InputBlock";
import Buttons from "../../molecules/buttons/Buttons";
import {useState} from "react";

export default function Form({ onClickButtonHandler, onSaveNewData }) {
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [date, setDate] = useState('')
	const [isError, setIsError] = useState(false)
	
	const submitHandler = (event) => {
		event.preventDefault()
		
		if (name === '' || price === '' || date === '') {
			setIsError(true)
		} else {
			const formData = {
				description: name,
				price: price,
				date: new Date(date)
			}
			
			onSaveNewData(formData)
			//очитска формы после отправки (нажатии кнопки)
			setName('')
			setPrice('')
			setDate('')
			setIsError(false)
		}
	}
	
	return (
		<>
			<form onSubmit={submitHandler}>
				<div className="new-cost__controls">
					<InputBlock
						labelFor="name"
						labelContent="Название"
						id="name"
						type="text"
						valueData={name}
						onChangeHandler={e => setName(e.target.value)}
						onFocusHandler={() => setIsError(false)}
					/>
					<InputBlock
						labelFor="number"
						labelContent="Сумма"
						id="number"
						type="number"
						valueData={price}
						onChangeHandler={e => setPrice(e.target.value)}
						onFocusHandler={() => setIsError(false)}
					/>
					<InputBlock
						labelFor="date"
						labelContent="Дата"
						id="date"
						type="date"
						valueData={date}
						onChangeHandler={e => setDate(e.target.value)}
						onFocusHandler={() => setIsError(false)}
					/>
				</div>
				{ isError && <div className="error-subtitle">Заполните все поля</div> }
				<Buttons onClickHandler={onClickButtonHandler}/>
			</form>
		</>
	)
}