import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
 sendPasswordResetEmail,
  signOut,
  
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
    .then((credential) =>{
      localStorage.setItem('userEmail', credential.user.email.toString())

    });
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function link(email, password) {
    return sendSignInLinkToEmail(auth, email, password);
  }
  function resetPassword(email, password) {
    return sendPasswordResetEmail(auth, email, password);
  }


  function signInLink(email, password) {
    return signInWithEmailLink(auth, email, password);
  }


  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider).then((response) => localStorage.setItem('userEmail', response.user.email.toString())
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      // console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn,link ,signInLink,resetPassword}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
