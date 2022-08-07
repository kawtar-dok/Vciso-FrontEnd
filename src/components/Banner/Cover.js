import React from "react";
import "./Cover.css";
import cover from "../../assets/banner/4.png";
import { motion } from "framer-motion";

function Cover() {
  return (
    <div className="Cover">
      <div className="Cover__background">
        <motion.img
          whileHover={{
            scale: 1.1,
          }}
          alt=".."
          className="Cover__background__image"
          src={cover}
        />
      </div>
      <div className="Cover__background__bg" />
      <div className="Cover__background__body ">
        <h1>VCISO est un RSSI Virtuel</h1>
        <h3>
          Un RSSI virtuel joue le même rôle qu'un RSSI à temps plein, mais d'une
          manière plus rentable. S'occupant de la sécurité dans le cadre d'un
          engagement à court terme ou d'un engagement limité, ils fourniront une
          stratégie, une orientation et une surveillance. Fonctionnant d'une
          voix indépendante, ils peuvent souvent éviter les politiques internes
          qui tourmentent certaines organisations.
        </h3>
      </div>
    </div>
  );
}

export default Cover;
