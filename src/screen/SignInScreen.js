import React from 'react'
import './SignInScreen.css'
function SignInScreen() {
  return (
    <div className='SignInScreen'>
        <form>
            <h1>Sign In</h1>
            <input placeholder='Email' type='email' />
            <input placeholder='Username' type='Username' />
            <input placeholder='Password' type='password' />
            <button type='submit'>Sign In</button>
            <h4>
              <span className='SignupScreen__gray'>New to Vciso? </span>
              <span className='SignupScreen__link'>Sign Up Now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignInScreen