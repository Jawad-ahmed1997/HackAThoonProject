import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

  import React from 'react'
  import Home from '../screens/Home'
  import Signup from '../screens/signup'
  
  export default function AppRouter (){ 
      return (
          <div>
            <Router>
                <Routes>
                    <Route path="/*" element={<Signup/>}/>
                    {/* <Route path="/Signup" element={<Signup/>}/> */}
                </Routes>
            </Router>
          </div>
      );
  };
  
  