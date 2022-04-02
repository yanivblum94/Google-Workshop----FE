import React from 'react';
import Professor from "./components/Proffesor/Professor";
import Reviews from './components/Reviews/Reviews';
import './App.css';


const reviews = [
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
    totalRating: 2,
    difficulty: 5,
    courseName: 'מבני נתונים',
    hwReq: 'כן',
    hwRef: 'לא',
    moodleQuality: 'כן',
    records: 'כן',
    textReview:'מבחן קשה מאוד בנוסף למטלות לא קלות ואין רפרנס לרובן',
  },
];

let averageRating = 0.0;
reviews.forEach(review => {
  averageRating += review.totalRating;
});
averageRating =averageRating/reviews.length;
const professor = {
  id: '1',
  name: 'ד"ר אמיר רובינשטיין',
  avgRating: averageRating ,
  email: 'amirr@tau.ac.il',
  website: "https://cs3801.wixsite.com/amirr"
}

function App() {
  

  return (

    <div className='container'>
      <Professor data={professor}/>
      <Reviews items = {reviews}/>
    </div>
  );
};

export default App;
