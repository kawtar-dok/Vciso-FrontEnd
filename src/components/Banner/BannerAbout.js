import React from "react";
import "./BannerAbout.css";
import cover from "../../assets/style/styleShape.png";
import { motion } from "framer-motion";
import coverLogo from "../../assets/style/styleCard6.png";

function BannerAbout() {
  return (
    <div className="BannerAbout">
      <div className="BannerAbout__background">
        <img
          whileHover={{
            scale: 1.1,
          }}
          alt=".."
          className="BannerAbout__background__Style"
          src={cover}
        />
        <motion.img
          whileHover={{
            scale: 1.1,
          }}
          alt=".."
          className="BannerAbout__background__image"
          src={coverLogo}
        />
        </div>
        <div className="BannerAbout__background__bg" />
        <div className="BannerAbout__background__body ">
          <h1>About Vciso.</h1>
          <h3>
          VCISO est Un RSSI virtuel joue le même rôle qu'un RSSI à temps plein, mais
            d'une manière plus rentable. S'occupant de la sécurité dans le cadre
            d'un engagement à court terme ou d'un engagement limité, ils
            fourniront une stratégie, une orientation et une surveillance.
            Fonctionnant d'une voix indépendante, ils peuvent souvent éviter les
            politiques internes qui tourmentent certaines organisations.
          </h3>
        </div>
      
    </div>
  );
}

export default BannerAbout;