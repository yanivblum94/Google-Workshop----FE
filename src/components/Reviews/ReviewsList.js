
import ReviewItem from './ReviewItem';
import './ReviewItem.css';

const ReviewsList = (props) => {
  if (props.items.length === 0) {
    return <h2 className = 'reviews-list__fallback'>לא נמצאו דירוגים</h2>;
  }

  return (
    <ul className='revies-list'>
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
