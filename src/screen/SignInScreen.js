import React from 'react'
import './SignInScreen.css'
import { motion } from "framer-motion"
import Particle from '../components/Tsparticules/Particle'
import Nav from '../components/Navbar/Nav'
import { Link } from "react-router-dom"

import coverSignIn from '../assets/banner/CoverSi.png';
function SignInScreen() {
  
  //prevent default behavior of the button inside the form, a button do  his typicle refresh ... empecher le comportement par defaut

   const signIn = (e) => {
    e.preventDefault();
   };
  

  return (
    
    <div className="SignInScreen__in">
    
      <div className="SignInScreen__background">
      <Particle />
      </div> 
      <Nav />
    <div className='SignInScreen'
                  whileHover={{ 
                scale: 1.1
               }}>
        <form>
            <h1>Sign In</h1>
            <input placeholder='Email' type='email' />
            <input placeholder='Password' type='password' />
            <button type='submit'
            onClick={signIn}>Sign In</button>
            <h4>
              <span className='SignupScreen__gray'>New to Vciso? </span>
              <Link to="/signup" className='SignupScreen__link'  >Sign Up Now. </Link>
            </h4>
        </form>
    </div>
    <motion.img
        whileHover={{ 
              scale: 1.1,
              }}
        alt='..'
        className='SignInScreen__in__image'
        src={coverSignIn}
        />
    </div>
  )
}

export default SignInScreen