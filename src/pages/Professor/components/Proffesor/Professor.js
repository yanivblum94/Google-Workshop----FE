import React from "react";
import { Link } from "react-router-dom";
import "./Professor.css";
import RatingChart from '../ReviewsChart/RatingChart';
import professorPic from "./professor_pic.jpg";

const Professor = (props) => {
  console.log(props);
  let reviewsCount = props.data.professorToPass.Reviews === null ? 0 : props.data.professorToPass.Reviews.length
  const mailto = "mailto:" + props.data.professorToPass.EmailAddr;
  const avgRating = "דירוג ממוצע: " + props.data.professorToPass.totalRating + " מתוך " + reviewsCount +" דירוגים";
  const website = props.data.professorToPass.WebsiteAddr;

  console.log("after this");
  const ratingValuesArray = reviewsCount === 0 ? [] : props.data.professorToPass.Reviews.map(rate => 
    rate.totalRating
  );
  console.log(ratingValuesArray);

  return (
    <body className="professor">

      <div className="professor-details">
        <div className="professor-elements">{props.data.professorToPass.Name}</div>
        <div className="professor-elements">{avgRating}</div>
        <div className="professor-elements">
          <span>דואר אלקטרוני: </span>
          <a href={mailto} itemProp="email" title={props.data.professorToPass.EmailAddr}>
            {props.data.professorToPass.EmailAddr}
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
