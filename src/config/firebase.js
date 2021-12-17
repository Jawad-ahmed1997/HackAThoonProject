import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged} from "firebase/auth";
import firebase from "firebase/app";
import {
  getDatabase,
  set,
  get,
  push,
  remove,
  ref,
  onValue,
  onChildAdded,
  child,
} from "firebase/database";

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
const database = getDatabase(app);
const auth = getAuth(app)

let signUp = (obj, navigate) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((res) => {
        // Signed in
        let uid = res.user.uid;
        console.log(uid)
        obj.uid = uid;
        const refrence = ref(database, `/users/${obj.uid}`);
        set(refrence, obj).then(() => {
          alert("user created Successfully");
        });
        dispatch({
          type: "SIGNUPDATA",
          uid,
        });
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
};

let userLogin = (obj,navigate) => {
  return (dispatch)=>{
  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then((succes)=>{
      const refrence = ref(database, `/users/${succes.user.uid}`);
      onValue(refrence, (snapshot) => {
        if (snapshot.exists()) {
          let userObj = snapshot.val();
          navigate("/", { state: userObj });
          console.log(snapshot.val());
        } 
        else{
          alert("incorrect id or Password")
        }
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
    navigate('/Home')
  }
  
};
 
export {signUp,userLogin,auth,database}


  // export {
  //   db,
  //   auth,
  //   createUserWithEmailAndPassword,
  //   signInWithEmailAndPassword,
  //   signOut,
  //   onAuthStateChanged,
  //   set,
  //   push,
  //   remove,
  //   ref,
  //   onValue,
  //   onChildAdded,
  //   child,
  //   get,
  // };