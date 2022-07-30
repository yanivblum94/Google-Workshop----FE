import React, { useState, useEffect } from "react";
import Professor from "./components/Proffesor/Professor";
import "./MainProfessor.css";
import TopBar from "../../pages/MainPage/components/TopBar";
import { useLocation } from "react-router-dom";
import CourseTabs from "./components/CourseTabs"


const MainProfessor = () => {
  const { state } = useLocation();

  const [professor, setProfessor] = useState([]);
  useEffect(() => {
    async function getProf(id) {
      const url = "https://tau-rate-356509.appspot.com/api/professor/ById?Id=" + id;
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

  return (
    <div className="main-professor">
      <TopBar></TopBar>
      <Professor data={professor} />
      <CourseTabs data={professor}></CourseTabs>
    </div>
  );
};

export default MainProfessor;
