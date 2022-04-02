import React, { useState } from 'react';

import Card from '../UI/Card';
import ReviewsList from './ReviewsList';
import ReviewsFilter from './ReviewsFilter';
import './Reviews.css';

const Reviews = (props) =>{
    const[filteredCourse, setFilteredCourse] = useState('הכול');

    const filterChangeHandler = (selectedCourse) => {
        setFilteredCourse(selectedCourse);
    }

    const filteredReviews = filteredCourse === 'הכול' ? props.items :
    props.items.filter((review) => {
    return review.courseName === filteredCourse;});

return (
    <div>
        <Card className='reviews'>
            <ReviewsFilter
            selected = {filteredCourse}
            onChangeFilter={filterChangeHandler}
            />
            <ReviewsList items = {filteredReviews}/>
        </Card>
    </div>
);
};

export default Reviews;