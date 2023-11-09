import "./style.css";
import Title from "../../atoms/title/Title";
import Price from "../../atoms/price/Price";

export default function Total({ totalPrice }) {
	return (
		<div className="total">
			<Title
				classTitle="total__title"
				content="Сумма Расходов За Год"
			/>
			<Price
				classTitle="total__price"
				content={totalPrice}
			/>
		</div>
	)
}