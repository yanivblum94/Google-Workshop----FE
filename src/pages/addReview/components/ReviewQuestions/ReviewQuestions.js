import ChoiceSegment from "../../components/ChoiceSegment/ChoiceSegment";
import './ReviewQuestion.css'
import DividedCard from "../../components/UI/DividedCard/DividedCard";

const ReviewQuestions = (props) => {
    return (
        <div className="review-question">
            <div className="review-question_title">
                {props.title}
            </div>
            <ChoiceSegment onChoosingOption={props.onChoosingOption} name={props.name} values={props.values} labels={props.labels}></ChoiceSegment>
        </div>
    )
}

export default ReviewQuestions;