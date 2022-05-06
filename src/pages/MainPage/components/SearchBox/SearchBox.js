import React, { useState, useRef, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchBox.css";
import { Link, useNavigate } from "react-router-dom";
import Professor from "../../../Professor/components/Proffesor/Professor";
import { Button } from "bootstrap";

const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  let navigate = useNavigate();
  let propessorId;
  let professorProps;
  let professorToPass;

  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      ulRef.current.style.display = "flex";
      onInputChange(event);
    });
    document.addEventListener("click", (event) => {
      ulRef.current.style.display = "none";
    });
  }, []);
  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="חפש מרצה"
        ref={inputRef}
        onChange={onInputChange}
      />
      <ul id="results" className="list-group" ref={ulRef}>
        {options.map((option, index) => {
          return (
            <button
              type="button"
              key={index}
              onClick={(e) => {
                inputRef.current.value = option.Name;
                propessorId = option.Id;
                console.log(propessorId);
                professorProps = options.filter(
                  (Professor) => Professor.Id === propessorId
                );
                console.log(professorProps);
                professorToPass = professorProps[0];
                console.log(professorToPass);
                navigate('/professor',
                {
                  state:{
                    props : {professorToPass}
                  }
                }
                )
              }}

              className="list-group-item list-group-item-action"
              // to={{
              //   pathname:'/professor',
              //   state: {
              //     props : "yaniv"
              //   }
              // }}
              
            >
              {option.Name + " - " + option.Faculty}
            </button>
          );
        })}
      </ul>
    </div>
  );
};

//      <Link to='/professor'>אמיר רובישטיין</Link>

function SearchBox() {
  const [defaultOptions, setProfessors] = useState([]);

  const fetchProfessorsHandler = useCallback(async () => {
    const response = await fetch("http://localhost:9842/api/professor");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    console.log("did http call");
    setProfessors(data);
  }, []);

  //console.log( Professors);

  useEffect(() => {
    fetchProfessorsHandler();
  }, [fetchProfessorsHandler]);
  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    setOptions(
      defaultOptions.filter((option) =>
        option.Name.includes(event.target.value)
      )
    );
  };
  return (
    <div className="App container mt-2 mb-3">
      <SearchbarDropdown options={options} onInputChange={onInputChange} />
    </div>
  );
}

export default SearchBox;
