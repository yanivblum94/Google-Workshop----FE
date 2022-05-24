import pic from "../images/logo.png";
import GoogleButton from "react-google-button";
import signInWithGoogle from "./signInWithGoogle";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="upper-bar">
      <GoogleButton
        className="google-button"
        type="light"
        onClick={signInWithGoogle}
      />
      <img src={pic} className="logo-pic" />
    </div>
  );
};

export default TopBar;
