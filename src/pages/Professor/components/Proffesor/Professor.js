import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Professor.css";
import RatingChart from '../ReviewsChart/RatingChart';
import professorPic from "./professor_pic.jpg";
import pic from "../../images/anonymous_profile_pic.png";
const Professor = (props) => {
  let navigate = useNavigate();
  const reviews = props.data.Reviews === null ? [] : props.data.Reviews ;
  const mailto = "mailto:" + props.data.email;
  const avgRating = "דירוג ממוצע: " + props.data.avgRating + " מתוך " + reviews.length + " דירוגים";
  const website = props.data.website;

  console.log("after this");
  const ratingValuesArray = reviews.map(rate =>
    rate.totalRating
  );
  console.log(ratingValuesArray);
  const pId = props.data.Id;
  const profName = props.data.Name;
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
