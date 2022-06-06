import React, { useState } from "react";

import Card from "../UI/Card";
import ReviewsList from "./ReviewsList";
import ReviewsFilter from "./ReviewsFilter";
import "./Reviews.css";

const Reviews = (props) => {
  const [filteredCourse, setFilteredCourse] = useState("הכול");

  const filterChangeHandler = (selectedCourse) => {
    setFilteredCourse(selectedCourse);
  };
  console.log(props.items);
  console.log(props.courses);
  const filteredReviews =
    filteredCourse === "הכול"
      ? props.items
      : props.items.filter((review) => {
          return review.Course === filteredCourse;
        });

  return (
    <div>
      <Card className="reviews">
        <ReviewsFilter
          selected={filteredCourse}
          onChangeFilter={filterChangeHandler}
          courses={props.courses}
        />
        <ReviewsList items={filteredReviews} />
      </Card>
    </div>
  );
};

export default Reviews;
