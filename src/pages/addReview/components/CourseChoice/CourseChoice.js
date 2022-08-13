import './CourseChoice.css'
import React from 'react'
import Select from 'react-select'


const CourseChoice = (props) => {
    const courseChangeHandler = (newCourse) => {
        props.onChoosingCourse(newCourse);
    };

    return (
        <div className='course-choice'>
            <div className='course-choice_prompt'>המרצה לימד\ה אותי בקורס </div>
            <Select onChange={courseChangeHandler} placeholder="אנא בחרו קורס" className="course-choice_select" options={props.course_options}></Select>
        </div>
    );
}

export default CourseChoice