import React, { useState, useEffect } from 'react'
import bckimg2 from './img/r2.jpg';
import bckimg3 from './img/bckimg3.jpg';
import { GoStar } from 'react-icons/go'
import { MdLocationOn } from 'react-icons/md'
import { onValue, ref, remove } from "firebase/database";
import { AiOutlineDelete } from "react-icons/ai";
import { db } from "../firebase";
import { auth } from "../firebase";
import {AiOutlineArrowLeft} from 'react-icons/ai'

import HotelDataService from "../services/hotelservices";

import { useUserAuth } from "../context/UserAuthContext";
import { addDoc, collection, getDocs,doc,deleteDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { FaDoorClosed } from 'react-icons/fa';
import { Link,  useNavigate  } from 'react-router-dom';
function Bookings({ getHotelId }) {
  const [bookings, setBookings] = useState([]);
  const [AllBookings, setAllBookings] = useState([])
 
  
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [showLinks,setShowLinks]= useState(false)

  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    getHotels();
  }, []);
  
  const getHotels = async () => {
    const data = await HotelDataService.getAllHotels();
    console.log(data.docs);
    setHotels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const bookingRef = collection(db, "booking")


  // const [currentuser, setCurrentUser] = useState(null)

  useEffect(() => {

    const getDetails = async () => {
      const data = await getDocs(bookingRef);
const getForSpecific = []
      var email = localStorage.getItem('userEmail')

      setAllBookings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      console.log(email)
      for (var booking = 0; booking < AllBookings.length; booking++) {
        if (AllBookings[booking].email === email) {
          getForSpecific.push(AllBookings[booking])
          //setBookings(AllBookings[booking])
        }
      }
      setBookings(getForSpecific)
      console.log(bookings)
    }
    getDetails();

  });


  const deleteHotel= (id) => {
    const hotelDoc = doc(db, "booking", id);
    return deleteDoc(hotelDoc);
    console.log('lll')
  };
  const [searchTerm,setSearchTerm]=useState(0)

  return (
    <div>
    <div className='Navbar'>
      
    <div className='leftSide'>
    <div className='links' id={showLinks ? "hidden": ""}>
    <Link className='' to="/home">Home</Link>
    <Link className='' to="/Hotels">Hotels</Link>
    {/* <Link className='' to="/Dining">Dining & Bar</Link> */}
    <a href="#section2">About Us</a>
    <Link className='' to="/Conatact">Contact Us</Link>
   {/* <Link className='' to="/Login">LogIn</Link>
      <Link className='' to="/signup">Register</Link> */}

    </div>
    <button onClick={()=> setShowLinks(!showLinks)}>Open</button>
    </div>
     <div className='rightSide'>
{/*           
    <input type="text"  placeholder='Search...'/>
    <button>Search</button> */}
    <button variant="primary" onClick={handleLogout}>
      Log out
    </button> 
    <div className='userAcc'>   {user && user.email}</div>
   
    </div>
</div>
    <div className='mainBook'>

 
    <div className='Bookings'>
    <br />
    <input type="text" 
    onChange={(e)=>{
      setSearchTerm(e.target.value)
      
    }}
    placeholder='Filter Booking...'
    />
      <div className="BookingsHeader">   <h3>Bookings</h3></div>
  

      <div className="BookingsRight">

        <table style={{ width: '800px' }} className='tablebookings'>
      
          <tr>
            <th>Full name</th>
            <th>Email</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>(R)Cost</th>
            <th>Action</th>

          </tr>
          {bookings.filter((val)=>{
            if(searchTerm=='')
{
  return val
}
else if(val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
{
return val
}


          }).map((user) => {
            return <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.checkIn}</td>
              <td>{user.checkOut}</td>
              <td>{user.total}</td>
              <td> <button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHotel(user.id)}
                  >
                    Cancel
                  </button></td>

            </tr>
          })}


        </table>
      </div>



    </div>
    </div>
    </div>
  )
}

export default Bookings
