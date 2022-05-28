import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Professor.css";
import RatingChart from '../ReviewsChart/RatingChart';
import StarRating from "../StarRating";

const Professor = (props) => {
  let navigate = useNavigate();
  const reviews = props.data.Reviews === null ? [] : props.data.Reviews;
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
        <div className="professor-name-and-email-and-website">
          <div className="professor-name">{props.data.Name}</div>
          <a className="professor-email" href={mailto} itemProp="email" title={props.data.EmailAddr}>
            {props.data.EmailAddr}
          </a>
          {(website != "") &&
            <button className="professor-website-button">
              <a href={website} itemProp="website" title="אתר">
                אתר המרצה
              </a>
            </button>
          }
        </div>
        <button className="rating-button" onClick={(e) => {
          navigate('/professor/add-review',
            {
              state: {
                profId: pId,
                profName: profName
              }
            }
          )
        }}
        >
          דרג את המרצה!
        </button>
      </div>

      <div className="professor-rating">
        <div className="professor-avg-rating">
          <div className="rating-numerator">{props.data.TotalRating}</div>
          <div className="rating-denominator">/5</div>
        </div>
        <StarRating avgRating={props.data.TotalRating}></StarRating>
        <div className="professor-additional-ratings">
          <div className="professor-would-take-again">
            <div className="wta-percent">83%</div>
            <div className="wta-text">היו לוקחים את הקורס מחדש
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="professor-diff-rating">
            <div className="pdr-rating">
              <div className="pdr-rating-numerator">4</div>
              <div className="pdr-rating-denominator">/5</div>
            </div>
            <div className="pdr-text">רמת קושי</div>
          </div>
        </div>
      </div>

      <div className="professor-rating-chart">
        <RatingChart ratingValuesArray={ratingValuesArray}></RatingChart>
      </div>
    </body>
  );
};

export default Professor;
