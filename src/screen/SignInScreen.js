import React from 'react'
import './SignInScreen.css'
import { motion } from "framer-motion"
import Particle from '../components/Particle'
import Nav from '../components/Nav'
import { Link } from "react-router-dom"

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
    <motion.div className='SignInScreen'
                  whileHover={{ 
                scale: 1.1
               }}>
        <form>
            <h1>Sign In</h1>
            <input placeholder='Email' type='email' />
            <input placeholder='Username' type='Username' />
            <input placeholder='Password' type='password' />
            <button type='submit'
            onClick={signIn}>Sign In</button>
            <h4>
              <span className='SignupScreen__gray'>New to Vciso? </span>
              <Link to="/signup" className='SignupScreen__link'  >Sign Up Now. </Link>
            </h4>
        </form>
    </motion.div>
    </div>
  )
}

export default SignInScreen