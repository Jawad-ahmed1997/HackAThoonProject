import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { useNavigate } from 'react-router'

function HotelCard() {
    const navigate = useNavigate();
    const showbooking=()=>{
        navigate('/bookingForm')
    }
    return (
        <div>
           <div className="w-100  d-flex justify-content-around align-items-center flex-column">
               <div className="div_h mb-3 p-3 card d-flex justify-content-center align-item-center flex-row  border">
                   <div className=" d-flex justify-content-center align-items-center">
                       <h3>Avari Tower Karachi</h3>
                   </div>
                   <div className="d-flex justify-content-center align-items-center">
                       <p>Avari Tower features an outdoor pool, spa and fitness centre. Offering modern air conditioned rooms, the property provides free WiFi in all areas. It is 15 km from Jinnah Airport.</p>
                       <button className='m-1 btn bg-primary' onClick={showbooking} >Show Price</button>
                   </div>
               </div>  
               <div className="div_h p-3 card d-flex justify-content-center align-item-center flex-row  border">
                   <div className=" d-flex justify-content-center align-items-center">
                       <h3>Ramadha Plaza Karachi</h3>
                   </div>
                   <div className="d-flex justify-content-center align-items-center">
                       <p>Avari Tower features an outdoor pool, spa and fitness centre. Offering modern air conditioned rooms, the property provides free WiFi in all areas. It is 15 km from Jinnah Airport.</p>
                       <button className='m-1 btn bg-primary'>Show Price</button>
                   </div>
               </div>  
               <div className="div_h p-3 card d-flex justify-content-center align-item-center flex-row  border">
                   <div className=" d-flex justify-content-center align-items-center">
                       <h3>Four Square Karachi</h3>
                   </div>
                   <div className="d-flex justify-content-center align-items-center">
                       <p>Avari Tower features an outdoor pool, spa and fitness centre. Offering modern air conditioned rooms, the property provides free WiFi in all areas. It is 15 km from Jinnah Airport.</p>
                       <button className='m-1 btn bg-primary'>Show Price</button>
                   </div>
               </div>  
               <div className="div_h p-3 card d-flex justify-content-center align-item-center flex-row  border">
                   <div className=" d-flex justify-content-center align-items-center">
                       <h3>pearl Continantal Hotel</h3>
                   </div>
                   <div className="d-flex justify-content-center align-items-center">
                       <p>Avari Tower features an outdoor pool, spa and fitness centre. Offering modern air conditioned rooms, the property provides free WiFi in all areas. It is 15 km from Jinnah Airport.</p>
                       <button className='m-1 btn bg-primary'>Show Price</button>
                   </div>
               </div>  
               <div className="div_h p-3 card d-flex justify-content-center align-item-center flex-row  border">
                   <div className=" d-flex justify-content-center align-items-center">
                       <h3>Hotel Sea View Karachi</h3>
                   </div>
                   <div className="d-flex justify-content-center align-items-center">
                       <p>Avari Tower features an outdoor pool, spa and fitness centre. Offering modern air conditioned rooms, the property provides free WiFi in all areas. It is 15 km from Jinnah Airport.</p>
                       <button className='m-1 btn bg-primary'>Show Price</button>
                   </div>
               </div>  
        </div>
        </div>
    )
}

export default HotelCard;
