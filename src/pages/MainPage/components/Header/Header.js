import React from "react";
import GoogleButton from "react-google-button";

import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">TAU-rate</div>
      <GoogleButton
        className="google-button"
        type="light"
        label="sign in with google"
        onClick={() => {
          console.log("Google button clicked");
        }}
      />
    </div>
  );
};

export default Header;
