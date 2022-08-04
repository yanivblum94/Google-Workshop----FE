import React, { useState, useEffect, useCallback } from 'react';
import ProfSearch from "./components/ProfSearch/ProfSearch";
import TopBar from "./components/TopBar/TopBar";

import "./MainPage.css";


function MainPage() {

  return (
    <div className='main-page'>
      <TopBar />
      <div className="main-page__explanation">
        ברוכים הבאים ל־TAU RATE: האתר לדירוג המרצים ועוזרי ההוראה של אוניברסיטת תל־אביב שבו אתם הסטודנטים מדרגים את מה שחשוב באמת!
      </div>
      <ProfSearch />
    </div>
  );
}

export default MainPage;