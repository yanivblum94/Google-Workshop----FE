import React from 'react';
import Professor from "./components/Proffesor/Professor";
import Reviews from './components/Reviews/Reviews'
import "./MainProfessor.css"
import Header from './components/Header/Header';
import { useLocation } from 'react-router-dom';

let newReviews;

const professor = {
    id: 'p1',
    name: 'ד"ר אמיר רובינשטיין',
    avgRating: 4 ,
    email: 'amirr@tau.ac.il',
    website: "https://cs3801.wixsite.com/amirr",
    ratings: [
      {
        id: 'r1',
        totalRating: 5,
        difficulty: 3,
        courseName: 'מבוא למדמח',
        hwReq: 'כן',
        hwRef: 'לא',
        moodleQuality: 'כן',
        records: 'כן',
        textReview:'אחלה מרצה, מלמד מעולה, מטלות לא קלות ואין רפרנס לרובן',
      },
      {
        id: 'r2',
        totalRating: 3,
        difficulty: 5,
        courseName: 'מבני נתונים',
        hwReq: 'כן',
        hwRef: 'לא',
        moodleQuality: 'כן',
        records: 'כן',
        textReview:'מבחן קשה מאוד בנוסף למטלות לא קלות ואין רפרנס לרובן',
      },
    ]
}

// const reviews = [
//   {
//     id: 'r1',
//     totalRating: 5,
//     difficulty: 3,
//     courseName: 'מבוא למדמח',
//     hwReq: 'כן',
//     hwRef: 'לא',
//     moodleQuality: 'כן',
//     records: 'כן',
//     textReview:'אחלה מרצה, מלמד מעולה, מטלות לא קלות ואין רפרנס לרובן',
//   },
//   {
//     id: 'r2',
//     totalRating: 2,
//     difficulty: 5,
//     courseName: 'מבני נתונים',
//     hwReq: 'כן',
//     hwRef: 'לא',
//     moodleQuality: 'כן',
//     records: 'כן',
//     textReview:'מבחן קשה מאוד בנוסף למטלות לא קלות ואין רפרנס לרובן',
//   },
// ];



function MainProfessor() {
  const {state} = useLocation()
  console.log(state.props)
  newReviews = state.props.professorToPass.Reviews === null ? [] : state.props.data.professorToPass.Reviews


  return (
    <div className='container'>
      <Header/>
      <Professor data={state.props}/>
      <Reviews items = {newReviews}/>
    </div>
  );
};

export default MainProfessor;
