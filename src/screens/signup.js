import Button from '../component/button'
import Input from '../component/input'
import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { signUp } from '../config/firebase'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'





function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [Cnic, setCnic] = useState("");
    const nevigate = useNavigate();
    const dispatch = useDispatch();

    
    const signupObj=(e)=>{
      e.preventDefault();
        let obj = {
            email,
            password,
            name,
            phone,
            Cnic
        };
        
        dispatch(signUp(obj,nevigate))
        console.log(obj)
    }

    return (
      <>
        <div className=" d-flex justify-content-center align-items-center">
          <div className=" signupMain m-3 d-flex justify-content-around flex-column align-items-center">
            <form onSubmit={(e)=>signupObj(e)} >
            <h1>Sign Up</h1>
            <div>
              <Input className="mb-3"
                placeholder="User Name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Input className="mb-3"
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input className="mb-3"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              </div>
              <div>
              <Input className="mb-3"
                placeholder="Phone Number"
                type="Text"
                onChange={(e) => setPhone(e.target.value)}
              />
              </div>
              <div>
              <Input className="mb-3"
                placeholder="Cnic"
                type="Text"
                onChange={(e) => setCnic(e.target.value)}
              />
            </div>
            <div>
              <Button className="btn bg-primary" value="Sign up">SignUp</Button>
            </div>
            </form>
            </div>
        </div>
      </>
    )
}

export default Signup;
