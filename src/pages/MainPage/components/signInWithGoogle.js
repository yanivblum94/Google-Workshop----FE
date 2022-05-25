import { initializeApp } from "firebase/app";
import { useState, useRef, useContext } from 'react';
import AuthContext from '../../../store/auth-context';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const SignInWithGoogle =() => {
  const authCtx = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: "mail.tau.ac.il"
  });
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
}

//export default SignInWithGoogle;
