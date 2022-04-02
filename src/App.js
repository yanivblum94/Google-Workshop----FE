import React from 'react';
import Professor from "./Professor";

const professor = {
    id: '1',
    name: 'ד"ר אמיר רובינשטיין',
    avgRating: 4.5 ,
    email: 'amirr@tau.ac.il',
    website: "https://cs3801.wixsite.com/amirr"
}


function App() {
  

  return (
    <div >
      <Professor data={professor}/>
    </div>
  );
};

export default App;
