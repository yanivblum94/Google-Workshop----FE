import React, { useState, useEffect, useCallback } from "react";
import Professor from "./components/Proffesor/Professor";
import Reviews from "./components/Reviews/Reviews";
import "./MainProfessor.css";
import Header from "./components/Header/Header";
import { useLocation } from "react-router-dom";
import TopBar from "./components/TopBar"
let newReviews;

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
        <TopBar></TopBar>
        <Professor data={professor} />
        <Reviews items={newReviews} />
      </div>
    );
  
};

export default MainProfessor;
