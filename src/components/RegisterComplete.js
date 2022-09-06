// import React, { useState,useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// //import { Form, Alert } from "react-bootstrap";
// //import { Button } from "react-bootstrap";
// import { useUserAuth } from "../context/UserAuthContext";

// //**** */
// import { auth } from "../firebase";
// import {toast} from 'react-toastify'
// //**** */
 
// const RegisterComplete = ({history}) => {
//   const [email, setEmail] = useState("");
//  const [password, setPassword] = useState("");

//   const { signInLink} = useUserAuth();
//   const { updatePassword} = useUserAuth();
//   const { currentUser} = useUserAuth();
//   const { getIdToken} = useUserAuth();
  
//   useEffect(()=>{

// setEmail(window.localStorage.getItem('emailForRegistration'))
// //   console.log(window.location.href)

// //   console.log(window.localStorage.getItem('emailForRegistration'))
// },[])

//   let navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
   

//     if(!email || !password)
//     {
//         toast.error('Email and password is required')
//         return;
//     }
//     if(password.length<6)
//     {
//         toast.error(' Password must be at least 6 characters long')
//         return;
//     }


//     try{
//  const result =await signInLink(
    
//     email,
//     window.location.href
//     );
// // console.log("result",result)

//  if(result.user.emailVerified){
//     //remove user email from local storage
//     window.localStorage.removeItem('emailForRegistration')


// //     //get user id token
// //     let user=auth.currentUser;
// //     await updatePassword(password)
// // const idTokenResult= await user.getIdTokenResult()

// //redux store
// //  console.log('user',user,'idTokenResult',idTokenResult)

//     //redirect

//     // history.push('/') 
// }

//     }catch (error){
//         console.log(error)
//         toast.error(error.message)
//     }


// //     const config={
// //       // url:process.env.REACT_APP_REGISTER_REDIRECT_URL,
   
// //       url:'http://localhost:3000/signup/complete',
// //       handleCodeInApp:true,
// //       };

// //       await link(email,config);
// //       toast.success(
// //         `Email is sent to ${email}. Click the link to complete your registration.`
// //       );

// //         //save user email in local storage
// //         window.localStorage.setItem('emailForRegistration',email)


// //         //clear the state
// //   setEmail("")      ;
// //   setPassword("")


// //*** * 
// //*** * 
// //**IMPORTANT */
//   //   setError("");
//   //   try {
//   //     await signUp(email, password);
//   //     navigate("/Login");
//   //   } catch (err) {
//   //     setError(err.message);
//   //   }
//    };

//   return (
//     <div className='back'>
//        <div className='container2'>
//        <div className="left"></div>
      
//         {/* <h2 className="mb-3">Firebase Auth Signup</h2>
//         {error && <Alert variant="danger">{error}</Alert>} */}
//         <div className="sign-up-form">
   
//         <form onSubmit={handleSubmit}>
//         <h1 className='signUp'>Register Complete</h1> <br />
         
//             <input
//               type="email"
//               placeholder="Email address" className='input' value={email} disabled
//                       />
// <br /><br /><br />

        
//             <input
//               type="password"
//               placeholder="Password" className='input' value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               autoFocus
//             />
//           <br /><br /><br />

        
//             <button className='btnLogin'  type="Submit">
//               Complete Registration
//             </button>
//             <div className="registerLinks">
//         Already have an account? <Link to="/Login">Log In</Link>
//       </div>
          
//         </form>
//         </div>  
      
      
//       </div>
//     </div>
//   );
// };

// export default RegisterComplete;
