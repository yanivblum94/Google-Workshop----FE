import React from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header/Header";
import SearchBox from "./components/SearchBox/SearchBox";

import "./MainPage.css";

function MainPage() {
  return (
    <div className="container">
      <Header />
      <SearchBox />
      <Link to='/professor'>אמיר רובישטיין</Link>
    </div>
  );
}

export default MainPage;