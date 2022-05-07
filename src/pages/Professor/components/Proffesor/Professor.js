import React from "react";
import { Link } from "react-router-dom";
import "./Professor.css";
import RatingChart from '../ReviewsChart/RatingChart';
import pic from "../../images/anonymous_profile_pic.png";
import StarRating from "../StarRating"; 
const Professor = (props) => {
  console.log(props);
  let reviewsCount = props.data.Reviews === null ? 0 : props.data.Reviews.length
  const mailto = "mailto:" + props.data.EmailAddr;
  const avgRating = "דירוג ממוצע: " + props.data.TotalRating + " מתוך " + reviewsCount + " דירוגים";
  const website = props.data.WebsiteAddr;

  console.log("after this");
  const ratingValuesArray = reviewsCount === 0 ? [] : props.data.Reviews.map(rate =>
    rate.TotalRating
  );
  console.log(ratingValuesArray);

  return (
    <body className="professor">
      <div className="professor-details">
        <div className="professor-details-first">
          <img src={pic} className="professor-picture"></img>
          <div className="professor-name-and-email">
            <div className="professor-name">{props.data.Name}</div>
            <div className="horizontal-line"></div>
            <a href={mailto} itemProp="email" title={props.data.EmailAddr}>
              {props.data.EmailAddr}
            </a>
          </div>
        </div>
        <div className="professor-website-review-and-rating">
          <button className="professor-website-button">
            <a href={website} itemProp="website" title="אתר">
              אתר המרצה
            </a>
          </button>
          <Link className="rating-button" to='/professor/add-review' >
            {/* //dynamiclly = {`/professor/$props.id}`} where props.is should results in professor id */}
            דרג את המרצה!
          </Link>
          <div className="professor-avg-rating">
            <div className="rating-numerator">{props.data.TotalRating}</div>
            <div className="rating-denominator">/5</div>
          </div>
          <StarRating avgRating={props.data.TotalRating}></StarRating>
          <RatingChart ratingValuesArray={ratingValuesArray}></RatingChart>
        </div>
      </div>
    </body>
  );
};

export default Professor;


