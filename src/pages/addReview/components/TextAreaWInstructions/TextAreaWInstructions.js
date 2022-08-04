import ColumnCard from "../../components/UI/ColumnCard/ColumnCard"
import './TextAreaWInstructions.css'
import DividedDiv from "../../components/UI/DividedDiv/DividedDiv"
const TextAreaWInstrucions = (props) => {
    return (
        <ColumnCard className="free-input">
            <DividedDiv>
                <div className="free-input_instructions__1st">
                    <div className="free-input_instructions__titles">כן</div>
                    <div className="free-input_instructions__texts">לכתוב בהרחבה איך היה המרצה, מה אהבתם וּמה פחות</div>
                </div>
                <div className="free-input_instructions__2nd">
                    <div className="free-input_instructions__titles">לא</div>
                    <div className="free-input_instructions__texts">להשתמש בשפה שאינה נאותה או במילים שאינן מכבדות</div>
                </div>
            </DividedDiv>
            <textarea onChange={props.onWritingReview} className='free-input_box' rows={10} MaxLength={300} placeholder={"התגובה צריכה להכיל 20 תווים לפחות"}></textarea>
        </ColumnCard>
    )
}

export default TextAreaWInstrucions;