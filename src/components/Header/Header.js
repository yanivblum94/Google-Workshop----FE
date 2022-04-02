import React from "react";
import './Header.css';
import SearchBar from "./SearchBar";

const Header = (props) => {
    return(
    <div className="header">
        <div className="logo">TAU-rate</div>
        <SearchBar/>
    </div>
    )
};


export default Header;