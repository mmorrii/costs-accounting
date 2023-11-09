import "./style.css"
import Label from "../../atoms/label/Label";
import Input from "../../atoms/input/Input";

export default function InputBlock({
							      classTitle,
								  labelContent,
								  labelFor,
								  id,
								  type,
								  valueData,
								  onChangeHandler,
							      onFocusHandler
}) {
	return (
		<div className="new-cost__control">
			<Label
				labelFor={ labelFor }
				content={ labelContent }
			/>
			<Input
				classTitle={`new-cost__input ${classTitle}`}
				id={id}
				type={type}
				valueData={valueData}
				onChangeHandler={onChangeHandler}
				onFocusHandler={onFocusHandler}
			/>
		</div>
	)
}