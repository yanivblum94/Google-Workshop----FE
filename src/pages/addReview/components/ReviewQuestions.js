import ChoiceSegment from "./ChoiceSegment";
import './ReviewQuestion.css'
import Card from "./Card";

const ReviewQuestions = (props) => {
    return (
        <Card className="review-question">
            <h2 className="review-question_title">
                {props.title}
            </h2>
            <ChoiceSegment onChoosingOption={props.onChoosingOption} name={props.name} values={props.values}></ChoiceSegment>
        </Card>
    )
}

export default ReviewQuestions;