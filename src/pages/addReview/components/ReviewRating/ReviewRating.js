import './ReviewRating.css'
import { useState } from "react";
import DividedCard from "../../components/UI/DividedCard/DividedCard";
import RatingCaps from "../../components/RatingCaps/RatingCaps";

const ReviewRating = (props) => {
    const [userRating, setUserRating] = useState("דרגו")

    const hoverChangeHandler = (newRating) => {
        if (newRating == 0) {
            setUserRating("דרגו");
        }
        else {
            setUserRating(props.ratingsOptions[newRating - 1]);
        }
    };

    const ratingChangeHandler = (newRating) => {
        setUserRating(props.ratingsOptions[newRating - 1]);
        props.onChoosingRating(newRating);
    };

    return (
        <DividedCard className="review-rating">
            <div className="review-rating_title">{props.title}</div>
            <div className="review-rating_main">
                <RatingCaps onChoosingRating={ratingChangeHandler} onHovering={hoverChangeHandler}></RatingCaps>
                <div className="review-rating_result">{userRating}</div>
            </div>
        </DividedCard>

    )
}

export default ReviewRating

