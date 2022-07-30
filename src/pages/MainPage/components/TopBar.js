import pic from "../images/logo.png";
import GoogleButton from "react-google-button";
import "./TopBar.css";
import { initializeApp } from "firebase/app";
import { useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../firebaseConfig";
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
        console.log(result);
        authCtx.login(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className="top-bar_Maria">

      <Link className="top-bar__logo" to="/mainPage">
        <img src={pic} className="top-bar__logo-pic" />
      </Link>

      {!authCtx.isLoggedIn && (
        <GoogleButton
          className="top-bar__google-button"
          type="light"
          onClick={SignInWithGoogle}
        />
      )}
      {authCtx.isLoggedIn && <div className="top-bar__user-greeting"><i class="fa-solid fa-graduation-cap fa-2x fa-beat"></i>{"  "}Hi, {authCtx.userName}!</div>}

    </div>
  );
};

export default TopBar;
