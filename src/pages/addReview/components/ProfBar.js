import './ProfBar.css'
import React, { Component } from 'react'
import Select from 'react-select'


const ProfBar = (props) => {
    const courseChangeHandler = (newCourse) => {
        props.onChoosingCourse(newCourse);
    };

    return (
        <div className='prof-bar'>
            <div className='prof-bar_title'>דרגו את:   </div>
            <div className='prof-bar_prof-name'> {props.prof_name}</div>
            <div className='prof-bar_course-prompt'> בקורס</div>
            <Select  onChange={courseChangeHandler} placeholder="אנא בחרו קורס" className="course-choice" options={props.course_options}></Select>
            {/*
            <textarea onChange={courseChangeHandler} className='prof-bar_course_choice' rows={10} MaxLength={300} placeholder={"אנא בַּחֲרוּ קורס"}></textarea>
            */}
        </div>
    );
}


export default ProfBar