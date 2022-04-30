import React from "react";
import { Link } from "react-router-dom";

import SearchBox from "./components/SearchBox/SearchBox";
import TopBar from "./components/TopBar";

import "./MainPage.css";

function MainPage() {
  return (
    <div className="container">
      <TopBar></TopBar>
      <SearchBox />
      <Link to='/professor'>אמיר רובישטיין</Link>
    </div>
  );
}

export default MainPage;