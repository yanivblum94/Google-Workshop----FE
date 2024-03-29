import './RatingCaps.css'
import { useState } from 'react';

const RatingCaps = (props) => {

  const setAndUpdateRating = (index) => {
    setRating(index);
    props.onChoosingRating(index);
  }

  const hoverRating = (index) => {
    setHover(index);
    props.onHovering(index);
  }
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className='rating-caps'>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={"graduation-cap-button-" + (index <= (hover || rating) ? "on" : "off")}
            onClick={() => setAndUpdateRating(index)}
            onMouseEnter={() => hoverRating(index)}
            onMouseLeave={() => hoverRating(rating)}
          >
            <i class="fa-solid fa-graduation-cap fa-3x"></i>
          </button>
        );
      })}
    </div>
  );
};

export default RatingCaps;