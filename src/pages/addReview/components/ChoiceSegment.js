import "./ChoiceSegment.css";
import CustomRadioButton from "./CustomRadioButton";

const ChoiceSegment = (props) => {
  return (
    <div className="choice-segment_options">
      <CustomRadioButton
        onChoosingOption={props.onChoosingOption}
        name={props.name}
        value={props.values[0]}
        label={props.labels[0]}
      ></CustomRadioButton>
      <CustomRadioButton
        onChoosingOption={props.onChoosingOption}
        name={props.name}
        value={props.values[1]}
        label={props.labels[1]}
      ></CustomRadioButton>
    </div>
  );
};

export default ChoiceSegment;
