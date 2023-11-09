import "./style.css"
import InputBlock from "../../molecules/input-block/InputBlock";
import Buttons from "../../molecules/buttons/Buttons";
import {useState} from "react";

export default function Form({ onClickButtonHandler, onSaveNewData }) {
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [date, setDate] = useState('')
	const [isError, setIsError] = useState(false)
	
	const nameChangeHandler = (event) => {
		setName(event.target.value)
	}
	const priceChangeHandler = (event) => {
		setPrice(event.target.value)
	}
	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}
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
						onChangeHandler={nameChangeHandler}
						onFocusHandler={() => setIsError(false)}
					/>
					<InputBlock
						labelFor="number"
						labelContent="Сумма"
						id="number"
						type="number"
						valueData={price}
						onChangeHandler={priceChangeHandler}
						onFocusHandler={() => setIsError(false)}
					/>
					<InputBlock
						labelFor="date"
						labelContent="Дата"
						id="date"
						type="date"
						valueData={date}
						onChangeHandler={dateChangeHandler}
						onFocusHandler={() => setIsError(false)}
					/>
				</div>
				{ isError && <div className="error-subtitle">Заполните все поля</div> }
				<Buttons onClickHandler={onClickButtonHandler}/>
			</form>
		</>
	)
}