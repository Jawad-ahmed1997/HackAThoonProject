// import { auth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from '../component/button'
import Input from '../component/input'
import React from 'react'
import '../App.css'
import {useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Firebase from '../config/firebase';
import { auth, signInWithEmailAndPassword } from "../config/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux'
import { db, get, ref, onValue } from "../config/firebase";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    
    const login=(e)=>{
      e.preventDefult();
        let obj = {
            email,
            password
        }
        dispatch(login(obj,navigate))
     }

    return (
      <>
        <div className=" d-flex LoginMainDiv justify-content-center align-items-center">
          <div className="LoginMain m-3 d-flex justify-content-around flex-column align-items-center">
      <h1>Login</h1>
      <form onSubmit={(e)=>login(e)}> 
            <div>
              <div></div>
              <Input className="mb-3"
                placeholder="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input className="mb-3 form-group"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
             <Button ClassName="btn btn-primary" value="Sign up" onClick={login} >Login</Button>
             </div>
      </form>
            
           </div>
         </div>
       </>
    )
}
export default Login;
