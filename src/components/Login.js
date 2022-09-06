import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import {toast} from 'react-toastify'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
      toast.error("Wrong password or email !!")
      return;
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='back'>
      <div className='container'>
          <div className="left"></div>
        {/* <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>} */}
        <div className="sign-up-form">
        <form onSubmit={handleSubmit}>
        <h1 className='signUp'>Log In</h1> <br />
         
            <input
              type="email"
              placeholder="Email address"
              className='input'
              onChange={(e) => setEmail(e.target.value)}
            />
        
        <br /> <br /> <br />
          
            <input
              type="password"
              placeholder="Password"
              className='input'
              onChange={(e) => setPassword(e.target.value)}
            /> <br /> <br /> <br />
        

            <button  type="Submit"  className='btnLogin'>
              Log In
            </button>
            <div className=" ">
        Don't have an account? <Link to="/signup">Register</Link>
      </div>
      </form>
      <div>
          <GoogleButton
            className="GoogleButton"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div> 
        <Link to="/forgot/password" className="">
        Forgot Password
      </Link> 
    
        </div>
        {/* <hr /> */}
        
     
      </div>
    </div>
  );
};

export default Login;
