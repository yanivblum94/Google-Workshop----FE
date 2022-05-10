import React, { useState, useEffect, useCallback } from 'react';
import { Link } from "react-router-dom";
import ProfSearch from "./components/ProfSearch";
import Header from "../Professor/components/Header/Header"
import TopBar from "./components/TopBar";

import "./MainPage.css";


function MainPage() {

  
  return (
    <div>
      <TopBar/>
      <div className="main-page_explanation">
        ברוכים הבאים ל-TAU RATE: אתר דירוגי המרצים ועוזרי ההוראה של אוניברסיטת תל-אביב בו אתם הסטודנטים מדרגים את מה שחשוב באמת!
      </div>
      <ProfSearch/>
    </div>
  );
}

export default MainPage;