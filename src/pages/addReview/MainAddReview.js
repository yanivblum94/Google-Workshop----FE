/* origin was App.css in Maria's branch */ 

import './MainAddReview.css'
import ProfBar from './components/ProfBar'
import ReviewRating from './components/ReviewRating';
import ReviewQuestions from './components/ReviewQuestions';
import TopBar from './components/TopBar';
import ProgressBar from "react-progressbar";
import { useState } from 'react';

const options = [
  { value: '03680001', label: 'מתמטיקה בדידה' },
  { value: '03680002', label: 'מבוא למדמ"ח' },
  { value: '03680003', label: 'מבני נתונים' }
]

const profRatingsOptions = [
  "גרוע", "לא משהו", "בסדר", "טוב", "מעולה"
]

const profDiffOptions = [
  "קשוח ממש", "קשה", "סביר", "די קל", "קללל"
]

const choiceValues = [
  "כן", "לא", "לא רלוונטי"
]

function MainAddReview() {
  const [completeness, setCompleteness] = useState(0);
  const [profRating, setProfRating] = useState(-1);
  const [diffRating, setDiffRating] = useState(-1);
  const [course, setCourse] = useState(-1);
  const [mandatoryAssignments, setMandatoryAssignments] = useState(-1);
  const [referenceAssignments, setReferenceAssignments] = useState(-1);
  const [materialOnMoodle, setMaterialOnMoodle] = useState(-1);
  const [recordings, setRecordings] = useState(-1);
  const [freeInput, setFreeInput] = useState(-1);
  const [isComplete, setIsComplete] = useState(0);

  const saveProfRating = (chosenRating) => {
    if (profRating === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setProfRating(chosenRating);
  }

  const saveDiffRating = (chosenRating) => {
    if (diffRating === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setDiffRating(chosenRating);
  }

  const saveCourse = (chosenCourse) => {
    if (course === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setCourse(chosenCourse);
  }

  const saveMandatoryAssignments = (chosenMandatoryAssignments) => {
    if (mandatoryAssignments === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setMandatoryAssignments(chosenMandatoryAssignments);
  }

  const saveReferenceAssignments = (chosenReferenceAssignments) => {
    if (referenceAssignments === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setReferenceAssignments(chosenReferenceAssignments);
  }
  const saveMaterialOnMoodle = (chosenMaterialOnMoodle) => {
    if (materialOnMoodle === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setMaterialOnMoodle(chosenMaterialOnMoodle);
  }
  const saveRecordings = (chosenRecordings) => {
    if (recordings === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setRecordings(chosenRecordings);
  }

  const saveFreeInput = (writtenInput) => {
    if (freeInput === -1) {
      setCompleteness(completeness + 100 / 8);
      if (completeness > 90) {
        setIsComplete(1);
      }
    }
    setFreeInput(writtenInput.target.value);
  }

  const submit = () => {
    if (completeness != 100) {
      console.log("not Complete")
    }
    
    console.log(profRating);
    console.log(diffRating);
    console.log(course);
    console.log(mandatoryAssignments);
    console.log(referenceAssignments);
    console.log(materialOnMoodle);
    console.log(recordings);
    console.log(freeInput);
  }

  return (
    <div className='MainAddReview'>
      <div className='bars'>
        <TopBar></TopBar>
        <ProfBar onChoosingCourse={saveCourse} prof_name="ד''ר אמיר רובינשטיין" course_options={options}></ProfBar>
        <ProgressBar height="5px" color="#003f7d" completed={completeness}></ProgressBar>
      </div>
      <div className='rest-of-page'>
        <ReviewRating onChoosingRating={saveProfRating} title={"אנא דרגו את המרצה"} ratingsOptions={profRatingsOptions}></ReviewRating>
        <ReviewRating onChoosingRating={saveDiffRating} title={"אנא דרגו את רמת הקושי של המרצה"} ratingsOptions={profDiffOptions}></ReviewRating>
        <ReviewQuestions onChoosingOption={saveMandatoryAssignments} title="חובת מטלות" name="nyku," values={choiceValues}></ReviewQuestions>
        <ReviewQuestions onChoosingOption={saveReferenceAssignments} title="יש רפרנסים למטלות" name="dfd," values={choiceValues}></ReviewQuestions>
        <ReviewQuestions onChoosingOption={saveMaterialOnMoodle} title="המרצה מעלה חומרים למודל" name="dfgd," values={choiceValues}></ReviewQuestions>
        <ReviewQuestions onChoosingOption={saveRecordings} title="ההרצאות מוקלטות" name="dvdhy," values={choiceValues}></ReviewQuestions>
        <textarea onChange={saveFreeInput} className='free-input' rows={10} MaxLength={300}></textarea>
        <button className='submit-button' onClick={submit}>דרג</button>
      </div>
    </div>
  );
}

export default MainAddReview;
