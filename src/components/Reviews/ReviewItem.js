import Card from "../UI/Card";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  return (
    <li>
      <Card className="review-item">
        <div className="review-item__description">
          <h2> קורס:{props.courseName}</h2>
          </div>
          <div className="review-item__price">
            דירוג כללי: {props.totalRating}{" "}
          </div>
          <div className="review-item__price">
            דרגת קושי: {props.difficulty}{" "}
          </div>
          <div className="review-item__price">
          <h2>חובת הגשות: {props.hwReq}</h2>
          <h2>מטלות ממוחזרות: {props.hwRef}</h2>
          <h2>מעלה חומרים למודל: {props.moodleQuality}</h2>
          <h2>קיימות הקלטות: {props.records}</h2>
          <h2>הערות: {props.textReview}</h2>
        </div>
      </Card>
    </li>
  );
};

export default ReviewItem;
