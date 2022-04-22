import './ProfBar.css'
import React, { Component } from 'react'
import Select from 'react-select'


const ProfBar = (props) => {
    const courseChangeHandler = (newCourse) => {
        props.onChoosingCourse(newCourse);
    };

    return (
        <div className='prof-bar'>
            <h2 className='prof-bar_title'>דרגו את:   </h2>
            <h2 className='prof-bar_prof-name'> {props.prof_name}</h2>
            <h2 className='prof-bar_course-prompt'> בקורס</h2>
            <Select onChange={courseChangeHandler} className='react-select-container' classNamePrefix="react-select" options={props.course_options} placeholder=" בחרו"/>
        </div>
    );
}


export default ProfBar