import React, { useState ,useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG, USER_ICON } from '../utils/constants';

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true);
  const[errorMessage,setErrorMessage]=useState(null);

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const name =useRef(null)
  const email = useRef(null);
  const password=useRef(null);

  const handleButtonClick=()=>{
  const message= checkValidData(email?.current?.value , password?.current?.value , name?.current?.value)
  setErrorMessage(message)
  if(message)return ;

  if(!isSignInForm)
  {
    // Sign up logic 
    createUserWithEmailAndPassword(auth, email?.current?.value , password?.current?.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL:USER_ICON
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName,photoURL}= user;
          dispatch
          (
            addUser({
            uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL

          })
          )
      navigate("/browse")
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error)
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   setErrorMessage(errorCode + "-" + errorMessage)
  });
  }

  
  else{
    // Sign in logic
    signInWithEmailAndPassword(auth, email?.current?.value , password?.current?.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage)
  });
  }


  }
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className="w-screen  ">
      <Header/>

     <div className="absolute">
     <img 
      className=""
      src={BG_IMG}
      alt="bg_img"
      />
     </div>
     
      <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black  w-3/12 my-36 mx-auto right-0 left-0 px-8 py-10 rounded-md bg-opacity-85 text-white">
        <h1 className="text-white text-4xl font-semibold mb-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm &&(
           <input 
           ref={name}
           className="px-3 py-4 rounded-md text-white w-full my-4 bg-gray-800"
           type="text" placeholder="Full Name "
           />
        )}

        <input 
        ref={email}
        className="px-3 py-4 rounded-md text-white w-full my-4 bg-gray-800"
        type="text" placeholder="Email or mobile number "
        />
        <input 
        ref={password}
        className="px-3 py-4 rounded-md  w-full my-4 text-white bg-gray-800"
        type="password" placeholder="Password"
        />
        <p 
        className="font-bold text-red-800 py-2 text-lg"
        >{errorMessage}
        </p>

        <button className="px-3 py-3 rounded-md bg-red-700 w-full my-4 text-white font-semibold" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"} </button>
        <p className="py-4 pl-1"
        >{isSignInForm ? "New to Netflix ?" : "Already a user ?"} 
        <button 
        className="font-bold"
        onClick={toggleSignInForm}
        >{isSignInForm ? "Sign up now" : "Sign in now"}</button></p>
      </form>
      

    </div>
  )
}

export default Login
