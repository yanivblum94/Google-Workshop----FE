import ChoiceSegment from "../../components/ChoiceSegment/ChoiceSegment";
import './ReviewQuestion.css'
import DividedCard from "../../components/AI/DividedCard/DividedCard";

const ReviewQuestions = (props) => {
    return (
        <DividedCard className="review-question">
            <div className="review-question_title">
                {props.title}
            </div>
            <ChoiceSegment onChoosingOption={props.onChoosingOption} name={props.name} values={props.values} labels={props.labels}></ChoiceSegment>
        </DividedCard>
    )
}

export default ReviewQuestions;