import React, { useState, useRef, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchBox.css";

const SearchbarDropdown = (props) => {
  const { options, onInputChange } = props;
  const ulRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.addEventListener('click', (event) => {
      event.stopPropagation();
      ulRef.current.style.display = 'flex';
      onInputChange(event);
    });
    document.addEventListener('click', (event) => {
      ulRef.current.style.display = 'none';
    });
  }, []);
  return (
    <div className="search-bar-dropdown">
      <input
        id="search-bar"
        type="text"
        className="form-control"
        placeholder="Search"
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
              }}
              className="list-group-item list-group-item-action"
            >
              {option.Name}
            </button>
          );
        })}
      </ul>
    </div>
  );
};



function SearchBox() {
  const [defaultOptions, setProfessors] = useState([]);

  const fetchProfessorsHandler = useCallback(async () => {
      const response = await fetch('http://localhost:9842/api/professor');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data);
      setProfessors(data);
      
   }, []);

   //console.log( Professors);

  useEffect(() => {
    fetchProfessorsHandler();
  }, [fetchProfessorsHandler]);
  const [options, setOptions] = useState([]);
  const onInputChange = (event) => {
    setOptions(
      defaultOptions.filter((option) => option.Name.includes(event.target.value))
    );
  };
  console.log("options");
  console.log(defaultOptions);
  return (
    <div className="App container mt-2 mb-3">
      <SearchbarDropdown options={options} onInputChange={onInputChange} />
    </div>
  );
}

export default SearchBox;
