import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import "./Professor.css";
import RatingChart from '../ReviewsChart/RatingChart';
import StarRating from "../StarRating";
import AuthContext from "../../../../store/auth-context";

const checkHasRated = (reviews, email) => {
  for (let i = 0; i < reviews.length; i++) {
    if (String(reviews[i].User) === String(email)) {
      return true;
    }
  }
  return false;
}

const Professor = (props) => {
  const authCtx = useContext(AuthContext);
  let navigate = useNavigate();
  const reviews = props.data.Reviews === null ? [] : props.data.Reviews;
  const ratingValuesNums = props.data.RatingValuesNums == null ? [0, 0, 0, 0, 0] : props.data.RatingValuesNums;
  const mailto = "mailto:" + props.data.email;
  const website = props.data.WebsiteAddr;

  const ratingValuesArray = reviews.map(rate =>
    rate.TotalRating
  );
  const pId = props.data.Id;
  const profName = props.data.Name;
  const courses = props.data.Courses;
  const hasRated = checkHasRated(reviews, authCtx.email);
  return (
    <body className="professor">
      <div className="professor-details">
        <div className="professor-name-and-email-and-website">
          <div className="professor-name">{props.data.Name}</div>
          <a className="professor-email" href={mailto} itemProp="email" title={props.data.EmailAddr}>
            {props.data.EmailAddr}
          </a>
          {(website !== "") &&
            <button className="professor-website-button">
              <a href={website} itemProp="website" title="אתר">
                אתר המרצה
              </a>
            </button>
          }
        </div>
        <button className="rating-button" onClick={(e) => {
          if (!authCtx.isLoggedIn) {
            alert('עליך להתחבר כדי להוסיף תגובה');
          }
          else if (hasRated) {
            alert('ניתן להוסיף תגובה אחת בלבד לכל מרצה');
          }
          else {
            navigate('/professor/add-review',
              {
                state: {
                  profId: pId,
                  profName: profName,
                  courses : courses
                }
              }
            )
          }
        }}
        >
          דרג את המרצה!
        </button>
        
      </div>

      <div className="professor-rating">
        <div className="professor-total-ratings-num">{(reviews.length) + " דירוגים"}</div>
        <div className="professor-avg-rating">
          <div className="rating-numerator">{(props.data.TotalRating).toFixed(1)}</div>
          <div className="rating-denominator">/5</div>
        </div>
        <StarRating avgRating={props.data.TotalRating}></StarRating>
        <div className="professor-additional-ratings">
          <div className="professor-treat-rating">
            <div className="treat-rating">
              <div className="treat-rating-numerator">{(props.data.TreatRating).toFixed(1)}</div>
              <div className="treat-rating-denominator">/5</div>
            </div>
            <div className="treat-text">יחס לסטודנטים</div>
          </div>
        </div>
      </div>

      <div className="professor-rating-chart">
        <RatingChart numReviews={ratingValuesNums} ratingValuesArray={ratingValuesArray}></RatingChart>
      </div>
    </body>
  );
};

export default Professor;
