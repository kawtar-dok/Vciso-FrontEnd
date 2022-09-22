import React, { useEffect, useState } from "react";
import "./Nav.css";
import { motion } from "framer-motion";
import companyLogo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";



function Nav() {
const [show, handleShow] = useState(false);
const navigate = useNavigate();

const transitionNavbar = () => {
    if(window.scrollY > 100) {
        handleShow(true);
    }
    else {      
        handleShow(false);
    }
};

useEffect(() => {
    window.addEventListener("scroll",transitionNavbar);
    return () => {
        window.removeEventListener("scroll",transitionNavbar);
    }
}
,[])


  return (
    <> 
     
    <div className={`nav ${show && "nav__black" }`}
   
    >
      <div classname="nav__contents">
       <img
        onClick={() => navigate('/')}
        alt=".."
        className="Nav__logo"
        src={companyLogo}
      />
    { /* <WhiteMode />*/}

      <motion.button className="Nav__button" 
      onClick={() => navigate('/signin')}
        whileHover={{ 
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)" }}
      >
        Sign In
      </motion.button>
     
      </div>
    </div>
    </>
  );
}

export default Nav;
