import "./CourseTabs.css"
import CourseTab from "./CourseTab";
import { useState } from "react";
import ReviewItem from "./Reviews/ReviewItem";
import { unstable_composeClasses } from "@mui/material";

let reviews, courses, coursesReviewsCounts, coursesDifficultiesSum,
    coursesMaterialsTrues, coursesRecordsTrues, coursesTakeAgainTrues;

const CourseTabs = (props) => {
    reviews = props.data.Reviews === null ? [] : props.data.Reviews;
    courses = props.data.Courses === null ? [] : props.data.Courses;
    coursesReviewsCounts = props.data.CoursesReviewsCounts === null ? [0, 0, 0, 0, 0] : props.data.CoursesReviewsCounts;
    coursesDifficultiesSum = props.data.CoursesDifficultiesSum === null ? [0, 0, 0, 0, 0] : props.data.CoursesDifficultiesSum;
    coursesMaterialsTrues = props.data.CoursesMaterialsTrues === null ? [0, 0, 0, 0, 0] : props.data.CoursesMaterialsTrues;
    coursesRecordsTrues = props.data.CoursesRecordsTrues === null ? [0, 0, 0, 0, 0] : props.data.CoursesRecordsTrues;
    coursesTakeAgainTrues = props.data.CoursesTakeAgainTrues === null ? [0, 0, 0, 0, 0] : props.data.CoursesTakeAgainTrues;

    let course_index = 0;
    let [selectedCourse, setSelectedCourse] = useState(courses[0]);
    let [filteredReviews, setFilteredReviews] = useState(reviews.filter((review) => {
        return review.Course == courses[0];
    }));

    const changeActiveTab = (tab) => {
        setFilteredReviews(props.data.Reviews.filter((review) => {
            return review.Course == tab.target.innerText;
        }))
        setSelectedCourse(tab.target.innerText);
    }

    return (
        <div className="courses-filter">
            <div className="courses-filter-tabs">
                {courses.map((course, index) => {
                    console.log(selectedCourse);
                    if (course == selectedCourse) {
                        course_index = index;
                        return (<CourseTab selected='selected-tab' name={course} setActiveCourseTab={changeActiveTab}></CourseTab>);
                    }
                    else {
                        return (<CourseTab selected='unselected-tab' name={course} setActiveCourseTab={changeActiveTab}></CourseTab>);
                    }
                })}
            </div>
            {filteredReviews.length != 0 &&
                <div className="courses-filter-reviews">
                    <div className="courses-filter-coursedata">
                        <div className="course_would_take-again">
                            <div className="course_would_take-again-percent">{(coursesTakeAgainTrues[courses.indexOf(selectedCourse)] / coursesReviewsCounts[courses.indexOf(selectedCourse)]).toFixed(1) * 100 + "%"}</div>
                            <div className="course_would_take-again-text">{"היו לוקחים את הקורס עם המרצה שוב"}</div>
                        </div>
                        <div className="course_difficulty">
                            <div className="course_difficulty-rating">{(coursesDifficultiesSum[courses.indexOf(selectedCourse)] / coursesReviewsCounts[courses.indexOf(selectedCourse)]).toFixed(1) + "/5"}</div>
                            <div className="course_course_difficulty-text">{"דרגת הקושי של הקורס"}</div>
                        </div>
                        <div className="course_moodle-material">
                            <div>{(coursesMaterialsTrues[courses.indexOf(selectedCourse)] / coursesReviewsCounts[courses.indexOf(selectedCourse)]) >= 0.5 && <i class="fa-solid fa-check fa-2x"></i>}  </div>
                            <div>{(coursesMaterialsTrues[courses.indexOf(selectedCourse)] / coursesReviewsCounts[courses.indexOf(selectedCourse)]) < 0.5 && <i class="fa-solid fa-xmark fa-2x"></i>}</div>
                            <div>{"המרצה מעלה את חומר הקורס למודל"}</div>
                        </div>
                        <div className="course_moodle-records">
                            <div>{(coursesRecordsTrues[courses.indexOf(selectedCourse)] / coursesReviewsCounts[courses.indexOf(selectedCourse)]) >= 0.5 && <i class="fa-solid fa-check fa-2x"></i>}</div>
                            <div>{(coursesRecordsTrues[courses.indexOf(selectedCourse)] / coursesReviewsCounts[courses.indexOf(selectedCourse)]) < 0.5 && <i class="fa-solid fa-xmark fa-2x"></i>}</div>
                            <div>{"המרצה מעלה הקלטות של הרצאות הקורס"}</div>
                        </div>
                    </div>
                    <div className="course-num-reviews">{coursesReviewsCounts[courses.indexOf(selectedCourse)]} דירוגים:</div>
                    {filteredReviews.map((review, index) => {
                        if (index == filteredReviews.length - 1) {
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
                        }
                        else {
                            return (
                                <div>
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
                                    />
                                    <div className="horizontal-line-reviews"></div>
                                </div>)
                        }
                    })}
                </div>}
        </div>
    )
}

export default CourseTabs;