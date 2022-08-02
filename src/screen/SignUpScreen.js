import React from "react"
import Nav from '../components/Nav'
import Particle from "../components/Particle"
import "./SignUpScreen.css"
import HeaderPlans from "../components/Header/HeaderPlans"

function SignUpScreen() {
  return (
    <div className="SignUpScreen">
      <div className="SignUpScreen__background">
        <Particle />
      </div>
      <Nav />
      <div className="SignUpScreen__body">
        <h1>Choose Your Plan</h1>
        <h3>Switch plans or cancel anytime.</h3>
      </div>
      <div className="SignUpScreen__HeaderPlans">
        <HeaderPlans />
      </div>
    </div>
  );
}

export default SignUpScreen;
