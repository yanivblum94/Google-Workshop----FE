import pic from "../images/logo.png";
import GoogleButton from "react-google-button";
import signInWithGoogle from "./signInWithGoogle";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="upper-bar">
      <img src={pic} className="logo-pic" />
      <GoogleButton
        className="google-button"
        type="light"
        onClick={signInWithGoogle}
      />
    </div>
  );
};

export default TopBar;
