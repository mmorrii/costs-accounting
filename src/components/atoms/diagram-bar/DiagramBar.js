import "./style.css";

export default function DiagramBar({ maxValue, value, label }) {
	let columnFillHeight = "0%"
	
	if (maxValue > 0) {
		columnFillHeight = Math.round(value / maxValue * 100) + "%"
	}
	
	return (
		<div className="diagram-bar">
			<div className="diagram-bar__inner">
				<div
					className="diagram-bar__fill"
					style={{
						height: columnFillHeight
					}}
				></div>
			</div>
			<div className="diagram-bar__label">{ label }</div>
		</div>
	)
}