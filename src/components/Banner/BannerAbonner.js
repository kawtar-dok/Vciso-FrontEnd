import React from 'react'
import './BannerAbonner.css'
import coverHumaans from '../../assets/banner/Humaaans.png';
import { motion } from 'framer-motion';

function BannerAbonner() {
  return (
    <div className="BannerAbonner">
      <div className="BannerAbonner__background">
      <div className="BannerAbonner__body">
        <h1>Select Your Plan</h1>
        <h3>Switch plans or cancel anytime.^^</h3>
        <motion.img
        whileHover={{ 
              scale: 1.1,
              }}
        alt='..'
        src={coverHumaans}
        />
      </div>

      </div>
    </div>
  )
}

export default BannerAbonner