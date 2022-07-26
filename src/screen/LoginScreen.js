import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "../screen/SignInScreen";
import companyLogo from "../assets/img/logo.png";
function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="LoginScreen">
      <div className="LoginScreen__background">
        <img
          alt=".."
          className="LoginScreen__logo"
          src={companyLogo}
         
        />
        <button className="LoginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="LoginScreen__gradient" />
      </div>

      <div className="LoginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            
            <h1>Unlimited strategy, guidance, oversight and more.</h1>
            <h2>Accessible at full time</h2>
            <h3>Try up to one Month free</h3>
            <div className="LoginScreen__input">
              <form>
                <input type="email" placeholder="Email Adress" />
                <button
                  onClick={() => setSignIn(true)}
                  className="LoginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
             {/* <button
                onClick={() => setSignIn(true)}
                className="LoginScreen__getStart"
              >
                Get Started
              </button> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
