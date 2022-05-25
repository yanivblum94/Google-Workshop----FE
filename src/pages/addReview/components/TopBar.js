import pic from "../images/logo.png";
import "./TopBar.css";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="top-bar">
      <Link to="/mainPage">
        <img src={pic} className="top-bar-logo-pic" />{" "}
      </Link>
    </div>
  );
};

export default TopBar;
