import React from "react";
import './SearchBar.css'

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input className="search-box"
            type="text"
            id="header-search"
            placeholder="חפש מרצה"
            name="s" 
        />
        <button className="search-button" type="submit">חיפוש</button>
    </form>
);

export default SearchBar;