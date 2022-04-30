/* origin was App.css in Maria's branch */

import './MainAddReview.css'
import ProfBar from './components/ProfBar'
import ReviewRating from './components/ReviewRating';
import ReviewQuestions from './components/ReviewQuestions';
import TopBar from './components/TopBar';
import ProgressBar from "react-progressbar";
import { useState } from 'react';
import TextAreaWInstrucions from './components/TextAreaWInstructions';
class Review {
  constructor(generalRating, difficultyRating, studentTreatmentRating,
    materialSharing, recordingsAvailable, takeAgain, wordsReview) {
    this.generalRating = generalRating;
    this.difficultyRating = difficultyRating;
    this.studentTreatmentRating = studentTreatmentRating;
    this.materialSharing = materialSharing;
    this.recordingsAvailable = recordingsAvailable;
    this.takeAgain = takeAgain;
    this.wordsReview = wordsReview;
  }
}
const options = [
  { value: '03680001', label: 'מתמטיקה בדידה' },
  { value: '03680002', label: 'מבוא למדמ"ח' },
  { value: '03680003', label: 'מבני נתונים' }
]

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

function MainAddReview() {
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
    if (writtenInput.target.value.length >= 20){
      if (freeInput == -1){
        setCompleteness(completeness + 100 / 8);
        if (completeness > 90) {
          setIsComplete(1);
        }
      }
      setFreeInput(writtenInput.target.value);
    }
    else{
      console.log(writtenInput.target.value.length);
      setFreeInput(-1);
      if (freeInput != -1){
        setCompleteness(completeness - (100 / 8));
        setIsComplete(0);
      }
    }
  }

  const submit = () => {
    console.log(isComplete);
    console.log(completeness);

    if (isComplete == 0) {
      console.log("not Complete");
    }

  }

  return (
    <div className='MainAddReview'>
      <div className='bars'>
        <TopBar></TopBar>
        <ProfBar onChoosingCourse={saveCourse} prof_name="ד''ר אמיר רובינשטיין" course_options={options}></ProfBar>
        <ProgressBar height="5px" color="#003f7d" completed={completeness}></ProgressBar>
      </div>
      <div className='rest-of-page'>
        <ReviewRating onChoosingRating={saveProfGeneralRating} title={"המרצה באופן כללי "} ratingsOptions={profRatingsOptions}></ReviewRating>
        <ReviewRating onChoosingRating={saveProfDifficultyRating} title={"רמת הקושי של המרצה"} ratingsOptions={profDiffOptions}></ReviewRating>
        <ReviewRating onChoosingRating={saveProfStudentTreatmentRating} title={"יחס המרצה לסטודנטים"} ratingsOptions={profStudentTreatmentOptions}></ReviewRating>
        <ReviewQuestions onChoosingOption={saveMaterialOnMoodle} title="המרצה מעלה את חומרי הקורס למודל" name="nyku," values={choiceSegmentValues} labels={choiceSegmentLabels}></ReviewQuestions>
        <ReviewQuestions onChoosingOption={saveRecordingsAvialable} title="יש הקלטות של הקורס במודל" name="dfd," values={choiceSegmentValues} labels={choiceSegmentLabels}></ReviewQuestions>
        <ReviewQuestions onChoosingOption={saveWouldTakeAgain} title="הייתי לוקח\ת את הקורס עם המרצה שוב" name="dfgd," values={choiceSegmentValues} labels={choiceSegmentLabels}></ReviewQuestions>
        <TextAreaWInstrucions onWritingReview={saveFreeInput}></TextAreaWInstrucions>
        <button className='submit-button' onClick={submit}>דרג</button>
      </div>
    </div>
  );
}

export default MainAddReview;
