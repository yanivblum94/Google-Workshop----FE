import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import ProfSearch from "./components/ProfSearch";
import Header from "../Professor/components/Header/Header"
import TopBar from "./components/TopBar";
import SearchBox from "./components/SearchBox/SearchBox"

import "./MainPage.css";


function MainPage() {

  
  return (
    <div className="container">
      <TopBar/>
      <div className="main-page_explanation">
        ברוכים הבאים ל-TAU RATE: אתר דירוגי המרצים ועוזרי ההוראה של אוניברסיטת תל-אביב בו אתם הסטודנטים מדרגים את מה שחשוב באמת!
      </div>
      <SearchBox/>
      <ProfSearch/>
    </div>
  );
}

export default MainPage;