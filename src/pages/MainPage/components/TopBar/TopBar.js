import pic from "../../images/logo.png";
import GoogleButton from "react-google-button";
import "./TopBar.css";
import { initializeApp } from "firebase/app";
import { useContext } from 'react';
import AuthContext from '../../../../store/auth-context';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../../firebaseConfig";
import { Link } from "react-router-dom";


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const TopBar = () => {
  const authCtx = useContext(AuthContext);

  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      hd: "mail.tau.ac.il",
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        authCtx.login(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="top-bar">
      <div className="empty-div"></div>
      <Link className="top-bar__logo" to="/mainPage">
        <img src={pic} className="top-bar__logo-pic" />
      </Link>
      <div className="empty-div"></div>
      {!authCtx.isLoggedIn && (
        <div id="our-button" className="top-bar__our-google-button">
        <GoogleButton id="google-button"
          className="top-bar__google-button"
          type="light"
          onClick={SignInWithGoogle}
        /></div>
      )}
      {authCtx.isLoggedIn && <div className="top-bar__user-greeting"><i class="fa-solid fa-graduation-cap fa-2x fa-beat"></i><div className="user-name">{"  "}Hi, {authCtx.userName}!</div></div>}

    </div>
  );
};

export default TopBar;
