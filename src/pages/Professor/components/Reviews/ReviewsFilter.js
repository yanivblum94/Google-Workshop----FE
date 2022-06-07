import React, { useState } from "react";

import "./ReviewsFilter.css";

const ReviewsFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  const courses = props.courses;
  console.log(courses);
  return (
    <div className="reviews-filter">
      <div className="reviews-filter__control">
        <label>בחר קורס</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value="הכול">הכול</option>
          {courses.length > 0 &&
            courses.map((item) => {
              const viewItem = item.courseNumber + " – " + item.courseName;
              return <option value={viewItem}> {viewItem} </option>;
            })}
        </select>
      </div>
    </div>
  );
};

export default ReviewsFilter;
