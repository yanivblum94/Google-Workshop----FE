import React, { useState, useEffect, useCallback } from "react";
import Professor from "./components/Proffesor/Professor";
import Reviews from "./components/Reviews/Reviews";
import "./MainProfessor.css";
import Header from "./components/Header/Header";
import { useLocation } from "react-router-dom";
let newReviews;

// const professor = {
//   id: "p1",
//   name: 'ד"ר אמיר רובינשטיין',
//   avgRating: 4,
//   email: "amirr@tau.ac.il",
//   website: "https://cs3801.wixsite.com/amirr",
//   ratings: [
//     {
//       id: "r1",
//       totalRating: 5,
//       difficulty: 3,
//       courseName: "מבוא למדמח",
//       hwReq: "כן",
//       hwRef: "לא",
//       moodleQuality: "כן",
//       records: "כן",
//       textReview: "אחלה מרצה, מלמד מעולה, מטלות לא קלות ואין רפרנס לרובן",
//     },
//     {
//       id: "r2",
//       totalRating: 3,
//       difficulty: 5,
//       courseName: "מבני נתונים",
//       hwReq: "כן",
//       hwRef: "לא",
//       moodleQuality: "כן",
//       records: "כן",
//       textReview: "מבחן קשה מאוד בנוסף למטלות לא קלות ואין רפרנס לרובן",
//     },
//   ],
// };

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

const MainProfessor = () => {
  const { state } = useLocation();
  console.log(state.props);

  const [professor, setProfessor] = useState([]);
  useEffect(() => {
    async function getProf(id) {
      console.log(id);
      const url = "http://localhost:5000/api/professor/ById?Id=" + id;
      console.log(url);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      console.log(response);
      const data = await response.json();
      console.log(data);
      setProfessor(data);
    }
    getProf(state.props.pId);
  }, []);

  console.log(professor)
  if (professor.length === 0) {
    console.log("empty professor")
    return (<h1>Loading</h1>);
  } 
    newReviews = professor.Reviews === null ? [] : professor.Reviews ;
    console.log("got professor")
    return (
      <div className="container">
        <Header />
        <Professor data={professor} />
        <Reviews items={newReviews} />
      </div>
    );
};

export default MainProfessor;
