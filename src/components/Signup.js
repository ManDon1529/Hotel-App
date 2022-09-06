import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";


import {toast} from 'react-toastify'

 
const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp,user } = useUserAuth();
  const { link } = useUserAuth();

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!email || !password)
    {
        toast.error('Email and password is required')
        return;
    }
    if(password.length<6)
    {
        toast.error(' Password must be at least 6 characters long')
        return;
    }

    setError("");
    try {
      await signUp(email, password);
    
       navigate("/Login");
    } catch (err) {
      setError(err.message);
      toast.error('User Already Exist !!')
      return;
    }
   };

  return (
    <div className='back'>
    
       <div className='container2'>
       <div className="left"></div>
      
        {/* <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>} */}
        <div className="sign-up-form">
   
        <form onSubmit={handleSubmit}>
        <h1 className='signUp'>Sign Up</h1> <br />
         
            <input
              type="email"
              placeholder="Email address" className='input' value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
<br /><br /><br />

        
            <input
              type="password"
              placeholder="Password" className='input' 
              onChange={(e) => setPassword(e.target.value)}
            />
          <br /><br /><br />

        
            <button className='btnLogin'  type="Submit">
              Register
            </button>
            <div className="registerLinks">
        Already have an account? <Link to="/Login">Log In</Link>
      </div>
          
        </form>
        </div>  
      
      
      </div>
    </div>
  );
};

export default Signup;
