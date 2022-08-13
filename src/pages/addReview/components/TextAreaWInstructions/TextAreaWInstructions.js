import ColumnCard from "../../components/UI/ColumnCard/ColumnCard"
import './TextAreaWInstructions.css'
import DividedDiv from "../../components/UI/DividedDiv/DividedDiv"
const TextAreaWInstrucions = (props) => {
    return (
        <div className="free-input">
            <div className="free-input_prompt">
                כמה מילים על המרצה
            </div>
            <textarea onChange={props.onWritingReview} className='free-input_box' rows={10} MaxLength={300} placeholder={"התגובה צריכה להכיל 20 תווים לפחות"}></textarea>
            <div className="free-input_instructions">
                <i class="fa-solid fa-graduation-cap fa-1x"></i>
                <div className="free-input_instructions__texts">אנא כתבו בהרחבה איך היה המרצה, מה אהבתם וּמה פחות</div>
            </div>
            <div className="free-input_instructions">
                <i class="fa-solid fa-graduation-cap fa-1x"></i>
                <div className="free-input_instructions__texts">אין להשתמש בשפה שאינה נאותה או במילים שאינן מכבדות</div>
            </div>
        </div>
    )
}

export default TextAreaWInstrucions;