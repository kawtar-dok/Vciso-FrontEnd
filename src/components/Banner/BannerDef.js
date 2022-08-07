import React from "react";
import "./BannerDef.css";
import card1 from "../../assets/banner/card1.png";
import card2 from "../../assets/banner/card2.png";
import card3 from "../../assets/banner/card3.png";
import card4 from "../../assets/banner/card4.png";
// rgb(86, 223, 176)
import { motion } from 'framer-motion';
import coverHumaans from "../../assets/banner/humans.png";
function BannerDef() {
  return (
    <div className="BannerDef">
      <div className="BannerDef__Title">
        <h1>Pourquoi S’Abonner Au Vciso ?</h1>
      </div>
     
      <motion.img 
       whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
      src={card1} 
      alt="" 
      className="BannerDef__Card1" />
      <motion.img 
      whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
      src={card2} 
      alt="" 
      className="BannerDef__Card2" />

      <motion.img 
      whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
      src={card3} 
      alt="" 
      className="BannerDef__Card3" />
      <motion.img 
       whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255,255,255)",
                }}
      src={card4} 
      alt="" 
      className="BannerDef__Card4" />
      <img
        whileHover={{ 
              scale: 1.1,
              }}
        alt='..'
        src={coverHumaans}
        className="BannerDef__img" 
        />
    </div>
  );
}

export default BannerDef;
