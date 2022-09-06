// import React, { useState } from "react";
// import { auth } from "../firebase";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"
// const Register=()=> {
//     const [email, setEmail] = useState("");

//     const handleSubmit=async(e)=>{
        
//         e.preventDefault()

        
//         const config={
//         url:'http://localhost:3000/register/complete',
//         handleCodeInApp:true,
//         };

//         await auth.sendSignInLinkToEmail(email,config);
//         toast.success(
//           `Email is sent to ${email}. Click the link to complete your registration.`
//         );

//         //save user email in local storage
//                 window.localStorage.setItem('emailForRegistration',email)


//                 //clear the state
//           setEmail("")      ;
//     };


//     const registerForm=()=> <div className="sign-up-form">
    
//     <form onSubmit={handleSubmit}>

//      <input
//        type="email" autoFocus
//         placeholder="Email address" className='input' value={email}
//          onChange={(e) => setEmail(e.target.value)}
//      />
//             <br />
//             <br />
     
//      <button className='btnLogin'  type="Submit">
//                Register
//             </button>
 
//     </form>


//     </div>
//   return (
//     <div>
//       {registerForm()}
//     </div>
//   )
// }

// export default Register
