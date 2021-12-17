import React from 'react'
import { Router } from 'react-router-dom'
import { Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Navbar() {
    return (
        <div >
                 <nav className="navbar navbar-expand-lg navbar-light bg-primary d-flex justify-content-center align-items-center">
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <h1>Welcom to Hotel</h1>
                 <Link className="loginLink ml-3" to='/login' >Login</Link>
                 <Link className="loginLink ml-3" to='/signup'>Signup</Link>
    <div class="navbar-nav">
    </div>
  </div>
</nav> 
        </div>
    )
}

export default Navbar
