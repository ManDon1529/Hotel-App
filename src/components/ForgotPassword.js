import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import {toast} from 'react-toastify'
import { useSelector } from "react-redux";
const ForgotPassword = ({history}) => {
  const [email, setEmail] = useState("");
  const [loading,setLoading]=useState(false)
  const { resetPassword } = useUserAuth();

  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const config={
      //     // url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
       
       url:'http://localhost:3000/Login',
         handleCodeInApp:true,
        };

        await resetPassword(email,config)
        .then(()=>{ 
          setEmail('');
          setLoading(false)
          toast.success("Check your email for password reset Link ")
          navigate("/Login");

        })
        .catch((error)=>{
          setLoading(false)
          toast.error(error.message)
          console.log("ERROR MSG IN FORGOT PASSWORD",error)
        })


  //  toast.success(
  //     `Email is sent to ${email}. Click the link to complete your registration.`
  //  );
     
    // setError("");
    // try {
    //   await logIn(email, password);
    //   navigate("/home");
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  // const handleGoogleSignIn = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await googleSignIn();
  //     navigate("/home");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <div className='back'>
      <div className='container'>
          <div className="left"></div>
        {/* <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>} */}
        <div className="sign-up-form">
        {loading ?(
          <h4>Loading</h4>
        ) :(
          <h4 className='signUp'>Forgot Password</h4>
        )}
        <form onSubmit={handleSubmit}>
        {/** <h1 className='signUp'>Forgot Password</h1> <br />
         */}
            <input
              type="email"
              placeholder="Email address"
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
        
        <br /> <br />
          {/*
            <input
              type="password"
              placeholder="Password"
              className='input'
              onChange={(e) => setPassword(e.target.value)}
            /> <br /> <br /> <br />
        
*/}
            <button  type="Submit"  className='btnLogin' disabled={!email}>
              Sumbit 
            </button>
      
      </form>
      
       
    
        </div>
        {/* <hr /> */}
        
     
      </div>
    </div>
  );
};

export default ForgotPassword;
