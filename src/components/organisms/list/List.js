import "./style.css";
import CostItem from "../../molecules/cost-item/CostItem";
import Title from "../../atoms/title/Title";

export default function List({ costFiltered, deleteItemHandler }) {
	// отображаем отфильтрованный массив
	const costItems = costFiltered.map(item => (
		<CostItem
			key={item.id}
			date={item.date}
			description={item.description}
			price={item.price}
			clickHandler={() => deleteItemHandler(item.id)}
		/>
	))
	
	return (
		<>
			{ (costItems.length === 0) ?
				(<Title
					classTitle="empty"
					content="Расходов Нет"
				/>) :
				( costItems )
			}
		</>
	)
}