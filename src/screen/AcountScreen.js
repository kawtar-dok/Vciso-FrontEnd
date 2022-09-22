import React from "react"
import { Link } from "react-router-dom"
import Nav from '../components/Navbar/Nav'
import "./AcountScreen.css"
import Particle from "../components/Tsparticules/Particle"

function AcountScreen() {
  const signUp = (e) => {
    e.preventDefault();
  };
  const current = new Date().toISOString().split("T")[0];
  
 


  return (
    <>
   
    <div className="AcountScreen">
      <div className="AcountScreen__background">
        <Particle />
      </div>
      <Nav />
      <div className="AcountScreen__body">
        <h1>Create Your Account</h1>
        <h3>Use your email and password.</h3>
      </div>
      <div
        className="AcountScreen__Up"
        whileHover={{
          scale: 1.1,
        }}
      >
        <form>
          <label>Email </label>
          <input placeholder="Email" type="email" required />
          <label>Username </label>
          <input placeholder="Username" type="Username" required />
          <label>Password </label>
          <input placeholder="Password" type="password" required />
          <label>Gender </label>
          <select>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option selected value="other">Prefer not to say</option>
          </select>
          <label>BIRTHDATE </label>
          <input type='date' placeholder='Enter BirthDate' 
             name='birthdate'
               max={current}
    />

          <button type="submit" onClick={signUp}>
            CONTINUE
          </button>
          <h4>
            <span className="AcountScreen__gray">
              By clicking “CONTINUE” you agree to the{" "}
            </span>
            <Link to="/signup" className="AcountScreen__link">
              {" "}
              Vciso Terms of Use{" "}
            </Link>
            <span className="AcountScreen__gray">and</span>
            <Link to="/signup" className="AcountScreen__link">
              {" "}
              Privacy Policy.
            </Link>
          </h4>
        </form>
      </div>
    </div>
    </>
  );
}

export default AcountScreen;
