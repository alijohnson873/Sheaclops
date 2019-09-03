// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbBH-tFWyw95-CUq61PJVfRnr_WuGkeLs",
  authDomain: "sheaclops-6916a.firebaseapp.com",
  databaseURL: "https://sheaclops-6916a.firebaseio.com",
  projectId: "sheaclops-6916a",
  storageBucket: "",
  messagingSenderId: "749965434872",
  appId: "1:749965434872:web:3d7a70ff0f2a82ed"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
