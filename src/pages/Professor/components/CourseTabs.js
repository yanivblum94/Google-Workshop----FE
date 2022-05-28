import "./CourseTabs.css"
import CourseTab from "./CourseTab";
import { useState } from "react";
import ReviewItem from "./Reviews/ReviewItem";
import { unstable_composeClasses } from "@mui/material";

const CourseTabs = (props) => {
    let [selectedCourse, setSelectedCourse] = useState(props.courses[0]);

    let [filteredReviews, setFilteredReviews] = useState(props.items.filter((review) => {
        return review.Course == props.courses[0];
    }));

    const changeActiveTab = (tab) => {
        setFilteredReviews(props.items.filter((review) => {
            return review.Course == tab.target.innerText;
        }))
        setSelectedCourse(tab.target.innerText);
    }

    return (
        <div className="courses-filter">
            <div className="courses-filter-tabs">
                {props.courses.map((course, index) => {
                    console.log(selectedCourse);
                    if (course == selectedCourse){
                        console.log("yrp" + selectedCourse)
                        return (<CourseTab selected='selected-tab' name={course} setActiveCourseTab={changeActiveTab}></CourseTab>);
                    }
                    else{
                        return (<CourseTab selected='unselected-tab'name={course} setActiveCourseTab={changeActiveTab}></CourseTab>);
                    }
                })}
            </div>
            <div className="courses-filter-reviews">
                {filteredReviews.map((review) => {
                    return (
                        <ReviewItem
                            key={review.id}
                            totalRating={review.TotalRating}
                            difficulty={review.DiffRating}
                            treatRaring={review.TreatRating}
                            courseName={review.Course}
                            takeAgain={review.TakeAgain}
                            moodleQuality={review.MaterialsUpdate}
                            records={review.RecordsUpdate}
                            textReview={review.Comment}
                        />)
                })}
            </div>
        </div>
    )
}

export default CourseTabs;