import ColumnCard from "./ColumnCard"
import './TextAreaWInstructions.css'
import DividedDiv from "./DividedDiv"
const TextAreaWInstrucions = (props) => {
    return (
        <ColumnCard className="free-input">
            <DividedDiv>
                <div className="free-input_instructions__1st">
                    <div className="free-input_instructions__titles">כן</div>
                    <div className="free-input_instructions__texts">לכתוב בהרחבה איך היה המרצה, מה אהבתם ומה פחות</div>
                </div>
                <div className="free-input_instructions__2nd">
                    <div className="free-input_instructions__titles">לא</div>
                    <div className="free-input_instructions__texts">להשתמש בשפה לא נאותה ובמילים לא מכבדות</div>
                </div>
            </DividedDiv>
            <textarea onChange={props.onWritingReview} className='free-input_box' rows={10} MaxLength={300}></textarea>
        </ColumnCard>
    )
}

export default TextAreaWInstrucions;