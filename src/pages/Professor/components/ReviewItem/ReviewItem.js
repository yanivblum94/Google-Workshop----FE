import "./ReviewItem.css";

const ReviewItem = (props) => {
  return (
    <li className="review-item">
      <div className="review-item__comment">
        <div className="review-item__comment-title">הערות: </div>
        {props.textReview}
      </div>
      <div className="review-item__ratingInfo">
        <div className="review-item__ratings">דירוג כללי: {props.totalRating}{" "}</div>
        {/*<div className="review-item__ratings">דרגת קושי: {props.difficulty}{" "}</div>*/}
      </div>
    </li>
  );
};

export default ReviewItem;
