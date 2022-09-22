import React from 'react'
import './HomeScreen.css'
import Nav from '../components/Navbar/Nav'
import LoginScreen from './LoginScreen'
import BannerDef from '../components/Banner/BannerDef'
import BannerAbonner from '../components/Banner/BannerAbonner'
import Footer from '../components/Footers/Footer'
import BannerAbout from '../components/Banner/BannerAbout'

function HomeScreen() {
  return (
    <div className="HomeScreen">
        
        {/*Nav */ }
         <Nav/>
         <LoginScreen />
          {/* <Cover />*/ } 
        <BannerAbout />
        <BannerDef />
        <BannerAbonner />
       
         {/*Footer<Footer />*/}
         <Footer />
        
    </div>
  )
}

export default HomeScreen