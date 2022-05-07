import React from "react";
import { Link } from "react-router-dom";
import "./Professor.css";
import RatingChart from '../ReviewsChart/RatingChart';
import professorPic from "./professor_pic.jpg";
import pic from "../../images/anonymous_profile_pic.png";
const Professor = (props) => {
  const mailto = "mailto:" + props.data.email;
  const avgRating = "דירוג ממוצע: " + props.data.avgRating + " מתוך " + props.data.ratings.length + " דירוגים";
  const website = props.data.website;

  console.log("after this");
  const ratingValuesArray = props.data.ratings.map(rate =>
    rate.totalRating
  );
  console.log(ratingValuesArray);

  return (
    <body className="professor">
      <div className="professor-details">
        <div className="professor-details-first">
          <img src={pic} className='professor-picture' />
          <div className="professor-name-and-email">
            <div className="professor-name">{props.data.name}</div>
            <div className="horizontal-line"></div>
            <div className="professor-email">
              <a href={mailto} itemProp="email" title={props.data.email}>
                {props.data.email}
              </a></div>
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
            <div className="rating-numerator">{props.data.avgRating}</div>
            <div className="rating-denominator">/5</div>
          </div>
          <RatingChart ratingValuesArray={ratingValuesArray}></RatingChart>
        </div>
      </div>
    </body>
  );
};

export default Professor;
