import React, { useState, useEffect, useCallback } from "react";
import Professor from "./components/Proffesor/Professor";
import Reviews from "./components/Reviews/Reviews";
import "./MainProfessor.css";
import TopBar from "./components/TopBar";
import { useLocation } from "react-router-dom";
let newReviews, courses;

const MainProfessor = () => {
  const { state } = useLocation();

  const [professor, setProfessor] = useState([]);
  useEffect(() => {
    async function getProf(id) {
      const url = "http://localhost:9842/api/professor/ById?Id=" + id;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setProfessor(data);
    }
    getProf(state.props.pId);
  }, []);

  if (professor.length === 0) {
    return (<h1>Loading</h1>);
  } 
    newReviews = professor.Reviews === null ? [] : professor.Reviews ;
    courses = professor.Courses === null ? [] : professor.Courses ;
    return (
      <div>
        <TopBar></TopBar>
        <Professor data={professor} />
        <Reviews 
        items={newReviews} 
        courses = {courses}/>
      </div>
    );
};

export default MainProfessor;
