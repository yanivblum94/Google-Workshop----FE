import React from "react";
//import { Link } from "react-router-dom";
import "./Professor.css";
import RatingChart from "./RatingChart";

// TODO: add dificulty

const Professor = (props) => {
  const mailto = "mailto:" + props.data.email;
  const avgRating = "דירוג ממוצע: " + props.data.avgRating + " מתוך " + props.data.ratings.length +" דירוגים";
  const website = props.data.website;

  console.log("after this");
  const ratingValuesArray = props.data.ratings.map(rate => 
    rate.totalRating
  );
  console.log(ratingValuesArray);

  return (
    <body className="professor">
      <div className="professor-details">
        <div className="professor-elements">{props.data.name}</div>
        <div className="professor-elements">{avgRating}</div>
        <div className="professor-elements">
          <span>דואר אלקטרוני: </span>
          <a href={mailto} itemProp="email" title={props.data.email}>
            {props.data.email}
          </a>
        </div>
        <div className="professor-element">
          <a href={website} itemProp="website" title="אתר">
            אתר
          </a>
        </div>
        <button className="ratingButton" role="button">
          דרג את המרצה!
        </button>
      </div>
      <RatingChart ratingValuesArray={ratingValuesArray}></RatingChart>
    </body>
  );
};

export default Professor;

//<a href="https://www.w3schools.com">W3Schools</a>;
//<{/* <Link to={props.data.website}>אתר</Link> */}>
{
  /* <button class="button-4" role="button">Button 4</button> */
}
