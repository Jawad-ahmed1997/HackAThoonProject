import React from 'react'
import reactDom from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'

function BookingForm() {

    const {email,setemail} = useState("");
    const {password,setpassword} = useState("");
    const {Days,setDays} = useState("");
    const {Roomsize,setRoomsize} = useState("");
    const {PaymentTerm,setPaymentterm} = useState("");
    const {Persons,setPersons} = useState("");


    let bookingObj={
        email,
        password,
        Roomsize,
        PaymentTerm,
        Persons,
        Days
    }
    console.log(bookingObj)

    return (
        <div className=' d-flex justify-content-center align-items-center '>
        <div className='d-flex justify-content-around align-items-center flex-column'>
            <form className='bookingCard'>
            <h1>Booking Form</h1>
        <div className='d-flex flex-row'>
  <div className="form-group">
    <label className="p-3" for="exampleInputEmail1">Email address</label>
    <input onchange={(e)=>setemail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label className="p-3" for="exampleInputPassword1">Password</label>
    <input onchange={(e)=>setpassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label className="p-3" for="exampleInputPassword1">Payment Term</label>
    <input onchange={(e)=>setPaymentterm(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  </div>
  <div className='d-flex flex-row'>
  <div className="form-group">
    <label className="p-3" for="exampleInputPassword1">RoomSize</label>
    <input onchange={(e)=>setRoomsize(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label className="p-3" for="exampleInputPassword1">Required Days</label>
    <input onchange={(e)=>setDays(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-group">
    <label className="p-3" for="exampleInputPassword1">For Persons</label>
    <input onchange={(e)=>setPersons(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  </div>
  <button type="button" class="btn btn-primary">Conform</button>
</form>
    </div>
    </div>
    )
}

export default BookingForm;
