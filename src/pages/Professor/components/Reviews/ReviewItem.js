import Card from "../UI/Card";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  return (
    <li className="review-item">
        <div className="review-item__ratingInfo">
          <div className="review-item__header">
            <div className="review-item__course">{props.courseName}</div>
            <div className="review-item__ratings">דירוג כללי: {props.totalRating}{" "}</div>
            <div className="review-item__ratings">דרגת קושי: {props.difficulty}{" "}</div>
          </div>
          <div className="review-item__courseMeta">
            <div className="review-item__metaItem">
              <div className="review-item__metaItem-title">חובת הגשות:</div>
              {(props.hwReq == "כן") &&  <i class="fa-solid fa-check fa-2x"></i>}
              {(props.hwReq == "לא") &&  <i class="fa-solid fa-xmark fa-2x"></i>}
              </div>
            <div className="review-item__metaItem">
              <div className="review-item__metaItem-title">מטלות ממוחזרות: </div>
              {(props.hwRef == "כן") &&  <i class="fa-solid fa-check fa-2x"></i>}
              {(props.hwRef == "לא") &&  <i class="fa-solid fa-xmark fa-2x"></i>}
            </div>
            <div className="review-item__metaItem">
            <div className="review-item__metaItem-title">מעלה חומרים למודל:</div>
              {(props.moodleQuality == "כן") &&  <i class="fa-solid fa-check fa-2x"></i>}
              {(props.moodleQuality == "לא") &&  <i class="fa-solid fa-xmark fa-2x"></i>}
            </div>
            <div className="review-item__metaItem">
              <div className="review-item__metaItem-title">קיימות הקלטות:</div>
              {(props.records == "כן") &&  <i class="fa-solid fa-check fa-2x"></i>}
              {(props.records == "לא") &&  <i class="fa-solid fa-xmark fa-2x"></i>} 
            </div>
          </div>
          <div className="review-item__comment">
            הערות: {props.textReview}
          </div>
        </div>
    </li>
  );
};

export default ReviewItem;
