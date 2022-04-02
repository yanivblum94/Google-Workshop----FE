import React from 'react';
import Professor from "./Professor";
import Reviews from './components/Reviews/Reviews'

const professor = {
    id: '1',
    name: 'ד"ר אמיר רובינשטיין',
    avgRating: 4.5 ,
    email: 'amirr@tau.ac.il',
    website: "https://cs3801.wixsite.com/amirr"
}

const expenses = [
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
];

function App() {
  

  return (
    <div >
      <Professor data={professor}/>
      <Reviews items = {expenses}/>
    </div>
  );
};

export default App;
