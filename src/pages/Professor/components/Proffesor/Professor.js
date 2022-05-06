import React from "react";
import { Link } from "react-router-dom";
import "./Professor.css";
import RatingChart from '../ReviewsChart/RatingChart';
import professorPic from "./professor_pic.jpg";

const Professor = (props) => {
  console.log(props);
  let reviewsCount = props.data.Reviews === null ? 0 : props.data.Reviews.length
  const mailto = "mailto:" + props.data.EmailAddr;
  const avgRating = "דירוג ממוצע: " + props.data.TotalRating + " מתוך " + reviewsCount +" דירוגים";
  const website = props.data.WebsiteAddr;

  console.log("after this");
  const ratingValuesArray = reviewsCount === 0 ? [] : props.data.Reviews.map(rate => 
    rate.TotalRating
  );
  console.log(ratingValuesArray);

  return (
    <body className="professor">

      <div className="professor-details">
        <div className="professor-elements">{props.data.Name}</div>
        <div className="professor-elements">{avgRating}</div>
        <div className="professor-elements">
          <span>דואר אלקטרוני: </span>
          <a href={mailto} itemProp="email" title={props.data.EmailAddr}>
            {props.data.EmailAddr}
          </a>
        </div>
        <div className="professor-element">
          <a href={website} itemProp="website" title="אתר">
            אתר
          </a>
        </div>
        <Link className="ratingButton" to='/professor/add-review' > 
        {/* //dynamiclly = {`/professor/$props.id}`} where props.is should results in professor id */}
          דרג את המרצה!
        </Link>
      </div>
      <RatingChart ratingValuesArray={ratingValuesArray}></RatingChart>
    </body>
  );
};

export default Professor;

//<a href="https://www.w3schools.com">W3Schools</a>;
//<{/* <Link to={props.data.professorToPass.website}>אתר</Link> */}>
{
  /* <button class="button-4" role="button">Button 4</button> */
}


//<img  src={professorPic}  alt="prof" height='20%' width='20%' />
