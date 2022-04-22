import './CustomRadioButton.css'

const CustomRadioButton = (props) => {
    const optionChoiceHandler = (new_choice) => {
        props.onChoosingOption(new_choice.target.value);
    }

    return (
        <div className="radio-button">
            <input onChange={optionChoiceHandler} type="radio" value={props.value} name={props.name}/>{props.value}
        </div>
    )
}

export default CustomRadioButton;