import {useState} from "react";
import {INITIAL_COSTS} from "../../data/costs";
import NewCost from "../templates/new-cost/NewCost";
import Costs from "../templates/costs/Costs";

function App() {
	const [costs, setCosts] = useState(INITIAL_COSTS)

	const addNewFormDataHandler = (inputData) => {
		// обновляем INITIAL_COST массив: добавляем новый обьект, полученный из Form (в начало)
		// и деструктуризируем INITIAL_COST массив, при чем получаем последнее состояние
		// (такая фича реакт)
		console.log(inputData)
		setCosts(prevInputData => {
			return [inputData, ...prevInputData]
		})
		
		//// добавление данных формы в local storage
		// let key = JSON.stringify(inputData.id)
		// localStorage.setItem(key, JSON.stringify(inputData));
	}
	const deleteItemHandler = (index) => {
		if (index === "c1" || index === "c2" || index === "c3") {
			return alert("Вы не можете удалить этот пункт");
		}
		const updateCosts = costs.filter((item) =>
			item.id !== index
		)
		setCosts(updateCosts)
	}
	
	return (
		<>
			<NewCost onAddNewData={addNewFormDataHandler} />
			<Costs
				costs={costs}
				deleteItemHandler={deleteItemHandler}
			/>
		</>
	);
}

export default App;
