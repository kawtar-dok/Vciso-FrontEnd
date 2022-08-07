import React from "react";
import "./Footer.css";
import facebookLogo from "../../assets/img/facebook.png";
import tweterLogo from "../../assets/img/tweter.png";
import instagramLogo from "../../assets/img/insta.png";
import youtubeLogo from "../../assets/img/youtube.png";

function Footer() {
  return (
    <div className="Footer">
     
      {/* Footer Bottom */}
        <div className="Footer__Bottom__legalLinks">
          
            <a href="#"
            target='_blank'
            rel="noopener noreferrer nofollow"
            aria-label='Vciso facebook'
            titles="Vciso Facebook" >
            
            <img
             src={facebookLogo}
             alt=""
             className="Footer__Facebook__Icon"
              />
            </a>
            <a href="#"
            target='_blank'
            rel="noopener noreferrer nofollow"
            aria-label='Vciso facebook'
            titles="Vciso Facebook" >
            
            <img
             src={tweterLogo}
             className="Footer__Icon"
              />
            </a>
            <a href="#"
            target='_blank'
            rel="noopener noreferrer nofollow"
            aria-label='Vciso facebook'
            titles="Vciso Facebook" >
            
            <img
             src={instagramLogo}
             alt=""
             className="Footer__Icon"
              />
            </a>
            <a href="#"
            target='_blank'
            rel="noopener noreferrer nofollow"
            aria-label='Vciso facebook'
            titles="Vciso Facebook" >
            
            <img
             src={youtubeLogo}
             alt=""
             className="Footer__Icon"
              />
            </a>
                 
        </div>
        <div className="Footer__grid"/>
        <div className="Footer__Bottom__text">
        <p>
          &copy; {new Date().getFullYear()} Vciso - All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
