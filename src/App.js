import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AcountScreen from './screen/AcountScreen';
import HomeScreen from './screen/HomeScreen';
import SignInScreen from './screen/SignInScreen';
import SignUpScreen from './screen/SignUpScreen';
function App() {
  return (
    <div className="app">
     <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/signin" element={<SignInScreen />} />  
          <Route path="/createAccount" element={<AcountScreen />} /> 
          
        </Routes>
     </Router>
   
    </div>
  );
}

export default App;
