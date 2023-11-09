import "./style.css";
import Date from "../../atoms/date/Date";
import Title from "../../atoms/title/Title";
import Price from "../../atoms/price/Price";
import { FaTimes } from 'react-icons/fa';

export default function CostItem({ date, description, price, clickHandler }) {
	return (
		<div className="cost-item">
			<Date date={date} />
			<div className="cost-item__description">
				<Title
					classTitle="cost-item__title"
					content={description}
				/>
				<Price
					classTitle="cost-item__price"
					content={price}
				/>
			</div>
			<div
				className="cost-item__icon"
				onClick={clickHandler}
			>
				<FaTimes style={{ height: "20px" }} />
			</div>
		</div>
	)
}