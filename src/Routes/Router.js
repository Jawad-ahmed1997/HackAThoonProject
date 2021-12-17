import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

  import React from 'react'
  import Home from '../screens/Home'
  import Signup from '../screens/signup'
  import Login from "../screens/login";
  import BookingForm from "../screens/bookingForm";
  
  export default function AppRouter (){ 
      return (
          <div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={<Home/>}/>Signup
                    <Route path ="/signup" element={<Signup/>}/>
                    <Route path ="/bookingForm" element={<BookingForm/>}/>
                </Routes>
            </Router>
          </div>
      );
  };
  
  