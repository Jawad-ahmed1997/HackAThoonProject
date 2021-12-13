import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANHlJw8z-FyLRpWBshSm0Sbptzb2nJWG8",
  authDomain: "boilerplatefirebase-211d8.firebaseapp.com",
  projectId: "boilerplatefirebase-211d8",
  storageBucket: "boilerplatefirebase-211d8.appspot.com",
  messagingSenderId: "436193521907",
  appId: "1:436193521907:web:1e553b6e3a7b0873774786",
  measurementId: "${config.measurementId}"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  // const analytics = getAnalytics(app);

export default initializeApp(firebaseConfig);