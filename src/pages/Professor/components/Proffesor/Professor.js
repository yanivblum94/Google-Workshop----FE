import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Professor.css";
import RatingChart from '../ReviewsChart/RatingChart';
import pic from "../../images/anonymous_profile_pic.png";
import StarRating from "../StarRating"; 
const Professor = (props) => {
  let navigate = useNavigate();
  const reviews = props.data.Reviews === null ? [] : props.data.Reviews ;
  const mailto = "mailto:" + props.data.email;
  const avgRating = "דירוג ממוצע: " + props.data.avgRating + " מתוך " + reviews.length + " דירוגים";
  const website = props.data.WebsiteAddr;

  const ratingValuesArray = reviews.map(rate =>
    rate.TotalRating
  );
  const pId = props.data.Id;
  const profName = props.data.Name;
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
          <button className="rating-button" onClick={(e) => {
                navigate('/professor/add-review',
                {
                  state:{
                    profId : pId,
                    profName: profName
                  }
                }
                )
              }}
              >
            דרג את המרצה!
          </button>
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
