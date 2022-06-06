import ReviewItem from "./ReviewItem";
import "./ReviewItem.css";
import "./ReviewsList.css";

const ReviewsList = (props) => {
  if (props.items.length === 0) {
    return <div className="reviews-list__fallback">לא נמצאו דירוגים</div>;
  }
  console.log(props.items);
  return (
    <ul className="reviews-list">
      {props.items.map((review) => (
        <ReviewItem
          key={review.id}
          totalRating={review.TotalRating}
          difficulty={review.DiffRating}
          treatRaring={review.TreatRating}
          courseName={review.Course}
          takeAgain={review.TakeAgain}
          moodleQuality={review.MaterialsUpdate}
          records={review.RecordsUpdate}
          textReview={review.Comment}
        />
      ))}
    </ul>
  );
};

export default ReviewsList;
