import "./CourseTab.css"
import { useState } from "react";


const CourseTab = (props) => {
    return (
        <div className={props.selected} onClick={props.setActiveCourseTab}>
            {props.name}
        </div>
    )
}

export default CourseTab;