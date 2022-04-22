import ReactStars from "react-rating-stars-component";
import './ReviewRating.css'
import { useState } from "react";
import Card from "./Card";

const ReviewRating = (props) => {
    const [userRating, setUserRating] = useState("דרגו")

    const ratingChangeHandler= (newRating) => {
        setUserRating(props.ratingsOptions[newRating-1]);
        props.onChoosingRating(newRating);
    };

    return (
        <Card className="review-rating">
            <h2 className="review-rating_title">{props.title}</h2>
            <ReactStars className="review-rating_stars"
                count={5}
                value={0}
                onChange={ratingChangeHandler}
                size={24}
                activeColor="#003f7d"
                color="#EEEEEE"
                emptyIcon={<i class="fa-solid fa-graduation-cap fa-2x"></i>}
                filledIcon={<i class="fa-solid fa-graduation-cap fa-shake fa-2x"></i>}
            />
            <div className="review-rating_result">{userRating}</div>
        </Card>

    )
}

export default ReviewRating

