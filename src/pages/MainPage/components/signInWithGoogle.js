import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseConfig } from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    hd: "mail.tau.ac.il"
  });
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user.email);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default signInWithGoogle;
