import { addDoc, collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { db } from '../firebase'
import { useLocation, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom';

// import {uid} from 'uid'
import { useUserAuth } from "../context/UserAuthContext";

function BookNow() {
  const bookingRef = collection(db, "booking")
  const {logOut, user } = useUserAuth()
  const navigate = useNavigate()
  // const uuid = uid();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
         } catch (error) {
      console.log(error.message);
    }
  };
  const [booking, setBooking] = useState([]);
  const [name, setName] = useState("")
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState("")
  const [adult, setAdult] = useState(0)
  const [children, setChildren] = useState(0)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [total, setTotal] = useState(0)
  const [refID, setRefID] = useState("")

  const { state } = useLocation();
  const { id } = state
  const [hotel, setHotel] = useState({})
  useEffect(() => {

    setHotel(id)
    console.log("id", id)
    console.log('book now', hotel)
    if (checkIn !== "" && checkOut !== "") {
      const date1 = new Date(checkIn)
      const date2 = new Date(checkOut)
      const diffTime = Math.abs(date2 - date1);
      setTotal(Math.ceil(diffTime / (24 * 3600 * 1000) * Number(hotel.price)))
    }


  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const bookNow = {
      name: name,
      email: email,
      checkIn: checkIn,
      checkOut: checkOut,
      adult: adult,
      children: children,
      total: total,
      refID: user.email

    };


    addDoc(bookingRef, bookNow).then(() => {

      alert("Added Succefully")
      navigate("/Bookings")
    }).catch((error) => {
      console.log(error)
    })
  }







  const [showLinks,setShowLinks]= useState(false)

  return (
    <div className='BookNOW'>
    <div className='Navbar' /* style={{backgroundColor:"#0E375C"}} */>
      
    <div className='leftSide'>
    <div className='links' id={showLinks ? "hidden": ""}>
      {/*  <Link className='' to="/">Home</Link>*/}
    <Link className='' to="/home">Home</Link>
    {/* <Link className='' to="/Dining">Dining & Bar</Link> */}


   {/* <Link className='' to="/Login">LogIn</Link>
      <Link className='' to="/signup">Register</Link> */}

    </div>
    <button onClick={()=> setShowLinks(!showLinks)}>Open</button>
    </div>
     <div className='rightSide'>
{/*           
    <input type="text"  placeholder='Search...'/>
    <button>Search</button> */}
     <Link className='BookingsLink' to="/bookings">Bookings</Link> 
    <button variant="primary" onClick={handleLogout}>
      Log out
    </button> 
    <div className='userAcc'>   {user && user.email}</div>
   
    </div>
</div>



      <form onSubmit={handleSubmit} className='bookform'  style={{ maxWidth: "500px", margin: 'auto' }}  /* style="max-width:500px;margin:auto" */>
        <br /><br />
        <h2>Book</h2>
        <br />

        








        <label htmlFor="">Full Name</label>
        <br />
          <input class="form-control"
            type="text"
        
            name="usrnm"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <label htmlFor="">Email</label>
          <br />


          
          <input class="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ color: "gray" }}
          />
          <br />
        
        {/** 
   <div class="input-container">
  <PhoneInput class="input-field" defaultCountry="ZA"
  type="tel" 
     id="number"
     placeholder="Enter phone number"
     name="usrnm"
    value={phone}
    onChange={setPhone}
    style
    />
  </div>  */}
  <label htmlFor="">Check In</label>
  <br />

          <input class="form-control"
            placeholder="Check In :  "
            type="Date"
            name="psw"
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
    <br />
    <label htmlFor="">Check Out</label>
    <br />
         
          <input class="form-control"
            placeholder="Check out :  "
            type="Date" name="psw"
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
   
<br />


        <button type="submit" className="btn btn success btn-md mybtn">Confirm Booking</button>
        <h5 style={{ color: "White" }}>Total Amount : R{total}</h5>
      </form>


      <div >

      </div>

    </div>
  )
}

export default BookNow


