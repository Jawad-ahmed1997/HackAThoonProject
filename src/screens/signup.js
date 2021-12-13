import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from '../component/button'
import Input from '../component/input'
import React from 'react'
import {useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Firebase from '../config/firebase';




function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    
    const signupObj=()=>{
        let obj = {
            email,
            password,
            name,
        }
        console.log(obj);

        
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
      alert("User Creat Successfuly")
    }

    return (
      <>
        <div className="d-flex justify-content-center align-item-center h-100 w-50">
          <div className="d-flex justify-content-center flex-column align-item-center">
            <h1>Sign Up</h1>
            <div>
              <Input
                placeholder="User Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <Button value="Sign up" onClick={signupObj} >SignUp</Button>
            </div>
          </div>
        </div>
      </>
    )
}

export default Signup;
