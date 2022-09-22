import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import { motion } from "framer-motion";
import Typed from "react-typed";
//components

import Particle from "../components/Tsparticules/Particle";

function LoginScreen() {
  const navigate = useNavigate();
  return (
    <header className="LoginScreen">
      <div className="LoginScreen__background">
        <Particle/>
        <div className="LoginScreen__gradient" />
      </div>

      <motion.div
        className="LoginScreen__body "
        //the initial stating point
        //where we should animate from
        initial={{ y: -50, opacity: 0 }}
        //where we should animate to
        animate={{ y: -10, opacity: 1 }}
        //control how that animation works
        //the stiffness ANIMATION IT'S  work just if the type is SPRING
        //the duration ANIMATION IT'S work just if the type is TWEEN
        transition={{ delay: 1, duration: 1, type: "spring", stiffness: 50 }}
      >
        <>
          <h1>Unlimited strategy, guidance, oversight and more.</h1>
          <h2>
            <Typed
              strings={[
                "Accessible a tout temps",
                "Management de la sécurité",
                "Détection et remédiation des cybermenaces",
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </h2>
          <h3>Try up to one Month free</h3>

          <div className="LoginScreen__input">
            {/*<form>
                <input type="email" placeholder="Email Adress" />
                <button
                  onClick={() => setSignIn(true)}
                  className="LoginScreen__getStarted"
                >
                  Get Started
                </button>
              </form> */}

            <motion.button
              // in place of animate, like when we hover on a btn we want to animate it
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              onClick={() => navigate("/signup")}
              className="LoginScreen__getStart"
            >
              Get Started
            </motion.button>
          </div>
          {/*  <img
          whileHover={{
            scale: 1.1,
          }}
          alt=".."
          className="LoginScreen__Style"
          src={icon}
        />*/}
        </>
      </motion.div>
    </header>
  );
}

export default LoginScreen;
