import React from 'react'
import './SignInScreen.css'
import { motion } from "framer-motion"

function SignInScreen() {
  //prevent default behavior of the button inside the form, a button do  his typicle refresh ... empecher le comportement par defaut
   const register = (e) => {
    e.preventDefault();
   };

   const signIn = (e) => {
    e.preventDefault();
   };
  

  return (
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
              <span className='SignupScreen__link' onClick={register}>Sign Up Now.</span>
            </h4>
        </form>
    </motion.div>
  )
}

export default SignInScreen