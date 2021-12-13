import React from 'react'
import { Link ,Routes,Route} from 'react-router-dom'
import Signup from './signup'
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="signup">Signup</Link>
            <Routes>
                <Route path="/signup" element={<Signup/>} />
            </Routes>
        </div>
    )
}

export default Home
