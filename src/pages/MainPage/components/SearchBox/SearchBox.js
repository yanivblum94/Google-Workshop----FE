import React from "react";

// import background from "./img/background.png";

import "./SearchBox.css";

const SearchBox = () => (
  <form action="/" method="get">
    <div className="searchWrapper">
      <label htmlFor="header-search">
        <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
        className="search-box"
        type="text"
        id="header-search"
        placeholder="יש להקליד שם של מרצה"
        name="s"
      />
      <button className="search-button" type="submit">
        חיפוש
      </button>
    </div>
  </form>
);

export default SearchBox;
