import React from 'react'
import { Link ,Routes,Route} from 'react-router-dom'
import Signup from './signup'
import Navbar from './Navbar'
import HotelCard from './HotelCard'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Home() {
    return (
        <div>
            <div className='mb-3'><Navbar/></div>
            <div><HotelCard/></div>
            
        </div>
    )
}

export default Home
