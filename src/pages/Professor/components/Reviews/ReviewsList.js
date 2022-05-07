
import ReviewItem from './ReviewItem';
import './ReviewItem.css';
import './ReviewsList.css';

const ReviewsList = (props) => {
  if (props.items.length === 0) {
    return <div className = 'reviews-list__fallback'>לא נמצאו דירוגים</div>;
  }

  return (
    <ul className='reviews-list'>
      {
        (props.items.map((review) => (
          <ReviewItem
            key={review.id}
            totalRating={review.totalRating}
            difficulty={review.difficulty}
            courseName={review.courseName}
            hwReq={review.hwReq}
            hwRef={review.hwRef}
            moodleQuality={review.moodleQuality}
            records={review.records}
            textReview={review.textReview}
          />
        )))
      }
    </ul>
  );
};

export default ReviewsList;
