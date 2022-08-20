import './CourseChoiceForReview.css'
import React from 'react'
import Select from 'react-select'


const CourseChoiceForReview = (props) => {
    const courseChangeHandler = (newCourse) => {
        props.onChoosingCourse(newCourse);
    };

    return (
        <div className='course-choice-for-review'>
            <Select onChange={courseChangeHandler} placeholder="אנא בחרו קורס" className="course-choice-review_select" options={props.course_options}></Select>
        </div>
    );
}

export default CourseChoiceForReview