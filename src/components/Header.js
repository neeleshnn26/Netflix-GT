import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_ICON } from '../utils/constants';
import {  toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/langSlice';

const Header = () => {
  const gptSearch=useSelector(store=>store.gpt?.gptSearch)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const user= useSelector(store=>store.user)

  const handleLanguageChange=(e)=>{
   dispatch(changeLanguage(e.target.value))
  }

  const handleGptSearchClick=()=>[
    dispatch(toggleGptSearchView())
  ]
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL}= user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL
        }))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
   
    // unsubscribe when components unmounts
    return ()=>unsubscribe()
  },[])


  return (
    <div className=" flex text-white items-center absolute z-10 bg-gradient-to-b from-black ">
        <img 
          className="w-44 ml-10 pt-3 "
          alt="netflix-logo"
          src={LOGO}
        />
        {user &&  (
          <>
          { user && !gptSearch &&(
             <div className="flex items-center">
             <ul className="flex ml-5 gap-5 font-normal cursor-pointer">
               <li><Link to="/browse">Home</Link></li>
               <li><Link to="/tvshows">TV Shows</Link></li>
               <li><Link to="/movies">Movies</Link></li>
               <li><Link to="/new-popular">New & Popular</Link></li>
               <li><Link to="/mylist">My List</Link></li>
             </ul>
           </div>
          )
             
          }
           
         
        <div className=" ml-8">
        
        {  gptSearch &&
           <select  className="bg-black border-2 border-white rounded-md px-2 py-1"
           onChange={handleLanguageChange}
           >
               {
                 SUPPORTED_LANGUAGES .map((lang)=>
                   <option key={lang.identifier} value={lang.identifier}
                   >{lang.name}</option>
                 )
               }
           </select>
   
        }
      
        <Link to="/browse">
        <button className="bg-red-700 px-2 mx-3 rounded-md ml-8 py-1"
        onClick={handleGptSearchClick}
          > {gptSearch ? "Homepage" : "GPT 🤖"}</button>
        </Link>
        </div>

        
        { user && !gptSearch &&(
              <div className="ml-44 flex">
              <input type="text" placeholder="Titles, people, genres" className="px-2 rounded-md bg-gray-500 bg-opacity-80" />
              <button className="pl-1">🔎</button>
             <Link to="/children"><button className="pl-7">Children</button></Link> 
              <button className="pl-5 mr-2">🔔</button>
            </div>
        )
       
        }
       
         {
          gptSearch ?
                 <div className="flex ml-[900px]">
                 <img alt="Avatar__logo" src={USER_ICON} className="rounded-md "/> 
                 <button className="ml-2 font-bold text-xl" onClick={handleSignOut}>Sign out</button>
                 </div>
                 :
                 <div className="flex ml-14">
                 <img alt="Avatar__logo" src={USER_ICON} className="rounded-md "/> 
                 <button className="ml-2 font-semibold" onClick={handleSignOut}>Sign out</button>
                 </div>


         }
      
          </>
          
        )}
        



        
      </div>
  )
}

export default Header
