import "./CourseTabs.css"
import CourseTab from "./CourseTab";
import { useState } from "react";
import ReviewItem from "./Reviews/ReviewItem";

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
    let [selectedCourse, setSelectedCourse] = useState(courses[0].courseName);
    let [filteredReviews, setFilteredReviews] = useState(reviews.filter((review) => {
        return review.Course === courses[0];
    }));

    const changeActiveTab = (tab) => {
        setFilteredReviews(props.data.Reviews.filter((review) => {
            return review.Course === tab.target.innerText;
        }))
        setSelectedCourse(tab.target.innerText);
    }

    const findIdxInCourse = (courses, courseName) =>{
        if(courses.length === 0){
            return -1;
        }
        for (let i=0; i<courses.length; i++){
            if(courses[i].courseName === courseName){
                return i;
            }
        }
        return -1;
    }

    return (
        <div className="courses-filter">
            <div className="courses-filter-tabs">
                {courses.map((course, index) => {
                    //console.log(selectedCourse);
                    if (course.courseName === selectedCourse) {
                        course_index = index;
                        return (<CourseTab selected='selected-tab' name={course.courseName} setActiveCourseTab={changeActiveTab}></CourseTab>);
                    }
                    else {
                        return (<CourseTab selected='unselected-tab' name={course.courseName} setActiveCourseTab={changeActiveTab}></CourseTab>);
                    }
                })}
            </div>
            {filteredReviews.length !== 0 &&
                <div className="courses-filter-reviews">
                    <div className="courses-filter-coursedata">
                        <div className="course_would_take-again">
                            <div className="course_would_take-again-percent">{(coursesTakeAgainTrues[findIdxInCourse(courses, selectedCourse)] / coursesReviewsCounts[findIdxInCourse(courses, selectedCourse)]).toFixed(1) * 100 + "%"}</div>
                            <div className="course_would_take-again-text">{"היו לוקחים את הקורס עם המרצה שוב"}</div>
                        </div>
                        <div className="course_difficulty">
                            <div className="course_difficulty-rating">{(coursesDifficultiesSum[findIdxInCourse(courses, selectedCourse)] / coursesReviewsCounts[findIdxInCourse(courses, selectedCourse)]).toFixed(1) + "/5"}</div>
                            <div className="course_course_difficulty-text">{"דרגת הקושי של הקורס"}</div>
                        </div>
                        <div className="course_moodle-material">
                            <div>{(coursesMaterialsTrues[findIdxInCourse(courses, selectedCourse)] / coursesReviewsCounts[findIdxInCourse(courses, selectedCourse)]) >= 0.5 && <i class="fa-solid fa-check fa-2x"></i>}  </div>
                            <div>{(coursesMaterialsTrues[findIdxInCourse(courses, selectedCourse)] / coursesReviewsCounts[findIdxInCourse(courses, selectedCourse)]) < 0.5 && <i class="fa-solid fa-xmark fa-2x"></i>}</div>
                            <div>{"המרצה מעלה את חומר הקורס למודל"}</div>
                        </div>
                        <div className="course_moodle-records">
                            <div>{(coursesRecordsTrues[findIdxInCourse(courses, selectedCourse)] / coursesReviewsCounts[findIdxInCourse(courses, selectedCourse)]) >= 0.5 && <i class="fa-solid fa-check fa-2x"></i>}</div>
                            <div>{(coursesRecordsTrues[findIdxInCourse(courses, selectedCourse)] / coursesReviewsCounts[findIdxInCourse(courses, selectedCourse)]) < 0.5 && <i class="fa-solid fa-xmark fa-2x"></i>}</div>
                            <div>{"המרצה מעלה הקלטות של הרצאות הקורס"}</div>
                        </div>
                    </div>
                    <div className="course-num-reviews">{coursesReviewsCounts[findIdxInCourse(courses, selectedCourse)]} דירוגים:</div>
                    {filteredReviews.map((review, index) => {
                        if (index === filteredReviews.length - 1) {
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