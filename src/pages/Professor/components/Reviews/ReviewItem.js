import Card from "../UI/Card";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  console.log(props);
  return (
    <li className="review-item">
      <div className="review-item__ratingInfo">
        <div className="review-item__header">
          <div className="review-item__course">{props.courseName}</div>
          <div className="review-item__ratings">
            דירוג כללי: {props.totalRating}{" "}
          </div>
          <div className="review-item__ratings">
            דרגת קושי: {props.difficulty}{" "}
          </div>
          <div className="review-item__ratings">
            יחס לסטודנטים: {props.difficulty}{" "}
          </div>
        </div>
        <div className="review-item__courseMeta">
          <div className="review-item__metaItem">
            <div className="review-item__metaItem-title">
              הייתי לוקח את הקורס שוב:{" "}
            </div>
            {props.takeAgain === true && (
              <i class="fa-solid fa-check fa-2x"></i>
            )}
            {props.takeAgain === false && (
              <i class="fa-solid fa-xmark fa-2x"></i>
            )}
          </div>
          <div className="review-item__metaItem">
            <div className="review-item__metaItem-title">
              העלאת חומרים למודל:{" "}
            </div>
            {props.moodleQuality === true && (
              <i class="fa-solid fa-check fa-2x"></i>
            )}
            {props.moodleQuality === false && (
              <i class="fa-solid fa-xmark fa-2x"></i>
            )}
          </div>
          <div className="review-item__metaItem">
            <div className="review-item__metaItem-title">העלאת הקלטות: </div>
            {props.records === true && <i class="fa-solid fa-check fa-2x"></i>}
            {props.records === false && <i class="fa-solid fa-xmark fa-2x"></i>}
          </div>
        </div>
        <div className="review-item__comment">הערות: {props.textReview}</div>
      </div>
    </li>
  );
};

export default ReviewItem;
