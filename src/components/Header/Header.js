import React from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import GoogleButton from "react-google-button";

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">TAU-rate</div>
      <SearchBar />
      <GoogleButton
        className="google-button"
        type="light"
        onClick={() => {
          console.log("Google button clicked");
        }}
      />
    </div>
  );
};

export default Header;
