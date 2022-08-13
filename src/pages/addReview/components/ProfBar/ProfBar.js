import './ProfBar.css'
import React from 'react'
import Select from 'react-select'


const ProfBar = (props) => {
    const courseChangeHandler = (newCourse) => {
        props.onChoosingCourse(newCourse);
    };

    return (
        <div className='prof-bar'>
            <div className='prof-bar_title'>דרגו את:   </div>
            <div className='prof-bar_prof-name'> {props.prof_name}</div>
        </div>
    );
}


export default ProfBar