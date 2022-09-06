//import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Pictures from "./components/Pictures";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import HotelList from './components/HotelList';
import AddHotel from './components/AddHotel';
import HomeAll from "./components/HomeAll";
import Navbar from "./components/Navbar";
import Hotels from "./components/Hotels";
import ForgotPassword from "./components/ForgotPassword";
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import RegisterComplete from './components/RegisterComplete'
import Bookings from "./components/Bookings";
import BookNow from "./components/BookNow";
import { ViewAll } from "./components/ViewAll";
function App() {

  const [hotelId, setHotelId] = useState("");

  const getHotelIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setHotelId(id);
  };
  return (
    <div className="App">


             <UserAuthContextProvider> 
             <ToastContainer/>
                 <Routes>
            <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              /> 
          
                  
              <Route exact path="/" element={<HomeAll />} />
          
              <Route exact path="/bookings" element={<Bookings />} />
              <Route  path="/Pictures" element={<Pictures/>} />
              <Route exact path="/booknow" element={<BookNow />} />
          
              <Route path="/signup" element={<Signup />} />
              <Route path="/signup/complete" element={<RegisterComplete />} />
             <Route path="/Login" element={<Login/>} />
              <Route path="/viewAll" element={<ViewAll/>} />
              <Route path="/forgot/password" element={<ForgotPassword />} />
              <Route path="/Hotels" element={<Hotels/>} /> 
              <Route path="/HotelList" element={<HotelList getHotelId={getHotelIdHandler}/>   } /> 
              <Route path="/AddHotel" element={<AddHotel id={hotelId} setHotelId={setHotelId}/>} /> 
       </Routes>    
          
   
           </UserAuthContextProvider>
        
          </div>
   
       
  );
}

export default App;
