import "./style.css";

export default function Date({ date }) {
	const month = new Intl.DateTimeFormat(
		'ru',
		{ month: 'long' }
	).format(date);
	const year = date.getFullYear();
	const day = new Intl.DateTimeFormat(
		'ru',
		{ day: '2-digit' }
	).format(date);
	
	return (
		<div className="cost-date">
			<div className="cost-date__year">{ year }</div>
			<div className="cost-date__month">{ month }</div>
			<div className="cost-date__day">{ day }</div>
		</div>
	)
}