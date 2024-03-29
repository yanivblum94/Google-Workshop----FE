import './MainAddReview.css'
import ProfBar from './components/ProfBar/ProfBar'
import ReviewRating from './components/ReviewRating/ReviewRating';
import ReviewQuestions from './components/ReviewQuestions/ReviewQuestions';
import OneReviewNote from './components/OneReviewNote/OneReviewNote';
import TopBar from '../../pages/MainPage/components/TopBar/TopBar';
import ProgressBar from "react-bootstrap/ProgressBar";
import { useState, useContext } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import TextAreaWInstrucions from './components/TextAreaWInstructions/TextAreaWInstructions';
import Thanks from './components/Thanks/Thanks';
import AuthContext from '../../store/auth-context';
import '../Professor/components/Proffesor/Professor.css'
import CourseChoice from './components/CourseChoice/CourseChoice';
import HorizontalLine from './components/UI/HorizontalLine/HorizontalLine';

class Review {
  constructor(Course, TotalRating, DiffRating, TreatRating,
    MaterialsUpdate, RecordsUpdate, TakeAgain, Comment, pId, user) {
    this.Course = Course;
    this.TotalRating = TotalRating;
    this.DiffRating = DiffRating;
    this.TreatRating = TreatRating;
    this.MaterialsUpdate = MaterialsUpdate;
    this.RecordsUpdate = RecordsUpdate;
    this.TakeAgain = TakeAgain;
    this.Comment = Comment;
    this.ProfId = pId;
    this.User = user;
  }
}


const profRatingsOptions = [
  "גרוע", "רע", "בסדר", "טוב", "מעולה"
]

const profDiffOptions = [
  "קשה מאוד", "קשה", "בסדר", "קל", "קל מאוד"
]

const profStudentTreatmentOptions = [
  "גרוע", "רע", "בסדר", "טוב", "מעולה"
]

const choiceSegmentLabels = [
  "כן", "לא"
]
const choiceSegmentValues = [
  true, false
]

const badWordsList = ["זונה", "ז*נה", "שרמיט", "שרמוט", "שרמוטה", "זבל", "מטומטם", "דביל", "כלב", "מניאק", "מנאייק", "מנאיק", "מאניאק",
  "אוטיסט", "מפגר", "אידיוט", "אדיוט", "מזדיין", "מזדין", "מיזדיין", "זין", "מיזדין", "שמוק", "צ'אחלה", "צאחלה", "ערס"]

function MainAddReview() {
  let review;
  const authCtx = useContext(AuthContext);
  const [completeness, setCompleteness] = useState(0);
  const [course, setCourse] = useState(-1);
  const [profGeneralRating, setProfGeneralRating] = useState(-1);
  const [profDifficultyRating, setProfDifficultyRating] = useState(-1);
  const [profStudentTreatmentRating, setProfStudentTreatmentRating] = useState(-1);
  const [materialOnMoodle, setMaterialOnMoodle] = useState(-1);
  const [recordingsAvailable, setRecordingsAvailable] = useState(-1);
  const [wouldTakeAgain, setWouldTakeAgain] = useState(-1);
  const [freeInput, setFreeInput] = useState(-1);
  const [isComplete, setIsComplete] = useState(0);
  const [canSubmit, setCanSubmit] = useState(-1);
  const [putResult, setPutResult] = useState(null);
  let navigate = useNavigate();

  const { state } = useLocation();
  const pId = state.profId;
  const user = authCtx.email;
  const courses = state.courses;
  const options = courses.map((course, index) => {
    return {
      value: course.courseNumber,
      label: course.courseName
    };
  });
  const saveCourse = (chosenCourse) => {
    if (course === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setCourse(chosenCourse);
  }

  const saveProfGeneralRating = (chosenRating) => {
    if (profGeneralRating === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setProfGeneralRating(chosenRating);
  }

  const saveProfDifficultyRating = (chosenRating) => {
    if (profDifficultyRating === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setProfDifficultyRating(chosenRating);
  }

  const saveProfStudentTreatmentRating = (chosenRating) => {
    if (profStudentTreatmentRating === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setProfStudentTreatmentRating(chosenRating);
  }

  const saveMaterialOnMoodle = (choice) => {
    if (materialOnMoodle === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setMaterialOnMoodle(choice);
  }

  const saveRecordingsAvialable = (choice) => {
    if (recordingsAvailable === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setRecordingsAvailable(choice);
  }

  const saveWouldTakeAgain = (choice) => {
    if (wouldTakeAgain === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setWouldTakeAgain(choice);
  }

  const saveFreeInput = (writtenInput) => {
    if (writtenInput.target.value.length >= 20) {
      if (freeInput === -1) {
        setCompleteness(completeness + 100 / 8);
        if (completeness > 90) {
          setIsComplete(1);
        }
      }
      setFreeInput(writtenInput.target.value);
    }
    else {
      setFreeInput(-1);
      if (freeInput !== -1) {
        setCompleteness(completeness - (100 / 8));
        setIsComplete(0);
      }
    }
  }

  const hasBadWord = () => {
    for (let i = 0; i < badWordsList.length; i++) {
      if (freeInput.includes(badWordsList[i])) {
        return true;
      }
    }
    return false;
  }

  async function submit() {
    if (completeness === 100) {
      if (hasBadWord()) {
        alert('נא להשתמש במילים ראויות בתגובה');
        return
      }
      setCanSubmit(1);
      setIsComplete(true);
      review = new Review(course.label, profGeneralRating, profDifficultyRating, profStudentTreatmentRating,
        materialOnMoodle, recordingsAvailable, wouldTakeAgain, freeInput, pId, user);
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review) 
    };
    try {
      const res = await fetch(`https://tau-rate-356509.appspot.com/api/professor`, requestOptions
        );
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
        const data = await res.json();
        const result = {
          status: res.status + "-" + res.statusText,
          headers: { "Content-Type": res.headers.get("Content-Type") },
          data: data,
        };
        setPutResult(result);
      } catch (err) {
        setPutResult(err.message);
      }
    }
    else {
      setCanSubmit(0);
    }
  }


  return (
    <div>
      {
        isComplete &&
        <div className='thanks-page'>
          <Thanks></Thanks>
          <button
            type="button"
            className="professor-website-button"
            onClick={(e) => {
              navigate('/professor',
                {
                  state: {
                    props: { pId }
                  }
                }
              )
            }}
          >חזור למרצה הקודם</button>
          <button
            type="button"
            className="professor-website-button"
            onClick={(e) => {
              navigate('/mainPage'
              )
            }}
          >חזור לדף הראשי</button>
        </div>
      }
      {
        !isComplete &&
        <div className='MainAddReview'>
          <div className='bars'>
            <TopBar></TopBar>
            <ProfBar onChoosingCourse={saveCourse} prof_name={state.profName} course_options={options}></ProfBar>
            <ProgressBar striped animated variant="custom" height="20px" color="#9391B6" now={completeness}></ProgressBar>
          </div>
          <div className='rest-of-page'>
            <OneReviewNote></OneReviewNote>
            <HorizontalLine></HorizontalLine>
            <CourseChoice onChoosingCourse={saveCourse} course_options={options}></CourseChoice>
            <HorizontalLine></HorizontalLine>
            <ReviewRating onChoosingRating={saveProfGeneralRating} title={"המרצה באופן כללי "} ratingsOptions={profRatingsOptions}></ReviewRating>
            <HorizontalLine></HorizontalLine>
            <ReviewRating onChoosingRating={saveProfDifficultyRating} title={"רמת הקושי של הקורס"} ratingsOptions={profDiffOptions}></ReviewRating>
            <HorizontalLine></HorizontalLine>
            <ReviewRating onChoosingRating={saveProfStudentTreatmentRating} title={"יחס המרצה לסטודנטים"} ratingsOptions={profStudentTreatmentOptions}></ReviewRating>
            <HorizontalLine></HorizontalLine>
            <ReviewQuestions onChoosingOption={saveMaterialOnMoodle} title="המרצה מעלה את חומרי הקורס למודל" name="nyku," values={choiceSegmentValues} labels={choiceSegmentLabels}></ReviewQuestions>
            <HorizontalLine></HorizontalLine>
            <ReviewQuestions onChoosingOption={saveRecordingsAvialable} title="יש הקלטות של הקורס במודל" name="dfd," values={choiceSegmentValues} labels={choiceSegmentLabels}></ReviewQuestions>
            <HorizontalLine></HorizontalLine>
            <ReviewQuestions onChoosingOption={saveWouldTakeAgain} title="הייתי לוקח\ת את הקורס עם המרצה שוב" name="dfgd," values={choiceSegmentValues} labels={choiceSegmentLabels}></ReviewQuestions>
            <HorizontalLine></HorizontalLine>
            <TextAreaWInstrucions onWritingReview={saveFreeInput}></TextAreaWInstrucions>
            {
              !canSubmit &&
              <div className='fill-request'>
                אנא מלאו את כל השדות
              </div>
            }
            <button className='submit-button' onClick={submit}>דרגו</button>
          </div>
        </div>
      }
    </div>
  );
}

export default MainAddReview;