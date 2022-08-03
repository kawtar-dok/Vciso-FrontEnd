import React from 'react'
import './HomeScreen.css'
import Nav from '../components/Navbar/Nav'
import LoginScreen from './LoginScreen'
import Cover from '../components/Banner/Cover'
import BannerDef from '../components/Banner/BannerDef'
import BannerAbonner from '../components/Banner/BannerAbonner'
//import Footer from '../components/Footers/Footer'

function HomeScreen() {
  return (
    <div className="HomeScreen">
        
        {/*Nav */ }
         <Nav/>
        {/*Banner*/ }
        <LoginScreen />
        <Cover />
        <BannerDef />
        <BannerAbonner />
         {/*Footer<Footer />*/}
        
    </div>
  )
}

export default HomeScreen