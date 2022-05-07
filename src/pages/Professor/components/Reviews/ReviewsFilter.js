import React, { useState } from 'react';

import './ReviewsFilter.css'

const ReviewsFilter = (props) =>{
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return(
        <div className='reviews-filter'>
      <div className='reviews-filter__control'>
        <label>בחר קורס</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
        <option value='הכול'>הכול</option>
          {/* <option value='מבוא למדמח'>מבוא למדמח</option>
          <option value='מבני נתונים'>מבני נתונים</option>
          <option value='מתמטיקה בדידה'>מתמטיקה בדידה</option> */}
        </select>
      </div>
    </div>
    )
}

export default ReviewsFilter;