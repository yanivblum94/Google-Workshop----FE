import Card from "../UI/Card";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  return (
    <li>
      <Card className="review-item">
        <div className="item__ratingValues">
        <div className="review-item__ratingValuesCard">
            דירוג כללי: {props.totalRating}{" "}
            </div>
            <div className="review-item__ratingValuesCard">
            דרגת קושי: {props.difficulty}{" "}
          </div>
          </div>

          <div className="review-item__ratingInfo">
            <div className="review-item__header">
              {props.courseName}
              </div>
              <div className="review-item__courseMeta">
                <div className="review-item__metaItem">
         חובת הגשות: {props.hwReq}
         </div>
         <div className="review-item__metaItem">
         מטלות ממוחזרות: {props.hwRef}  
         </div>
         <div className="review-item__metaItem">
          מעלה חומרים למודל: {props.moodleQuality}  
          </div>
          <div className="review-item__metaItem">
          קיימות הקלטות: {props.records}
          </div>
          </div>
          <div className="review-item__comment">
          הערות: {props.textReview}
        </div>
        </div>
      </Card>
    </li>
  );
};

export default ReviewItem;
