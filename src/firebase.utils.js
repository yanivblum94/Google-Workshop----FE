import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCjVvLMltmNwvMfF1-Xp1R840fVIvN-EVM",
    authDomain: "tau-rate.firebaseapp.com",
    projectId: "tau-rate",
    storageBucket: "tau-rate.appspot.com",
    messagingSenderId: "602185907792",
    appId: "1:602185907792:web:20d87de685145c5e9e9b55",
    measurementId: "G-6GN7NK521N"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;