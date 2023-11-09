import { useState } from 'react';

const MyForm = () => {
	const [formData, setFormData] = useState({
		title: '',
		amount: '',
		date: '',
	});
	
	const [error, setError] = useState(false);
	
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	
	const handleSubmit = () => {
		if (formData.title && formData.amount && formData.date) {
			// Отправить данные
			console.log('Отправляю данные:', formData);
		} else {
			// Показать ошибку
			setError(true);
		}
	};
	
	return (
		<div>
			<input
				type="text"
				name="title"
				value={formData.title}
				onChange={handleInputChange}
				placeholder="Название"
			/>
			<input
				type="text"
				name="amount"
				value={formData.amount}
				onChange={handleInputChange}
				placeholder="Сумма"
			/>
			<input
				type="text"
				name="date"
				value={formData.date}
				onChange={handleInputChange}
				placeholder="Дата"
			/>
			
			{error && <p style={{ color: 'red' }}>Заполните все поля</p>}
			
			<button onClick={handleSubmit}>Отправить</button>
		</div>
	);
};

export default MyForm;
