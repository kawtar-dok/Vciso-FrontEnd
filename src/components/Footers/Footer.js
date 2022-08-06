import React from "react";
import "./Footer.css";
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
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Icon_Facebook.svg/1200px-Icon_Facebook.svg.png"
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
             src="https://o.remove.bg/downloads/0cbb8b22-3ce1-48e8-9d6f-6b4726fbca60/mrg45j-instagram-black-logo-free-download-logo-instagram-11563241212uripztafmg-removebg-preview.png"
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
             src="https://o.remove.bg/downloads/1127b96c-a2b5-46a1-9a8e-54776325cafc/204-2040928_logo-twitter-circle-grey-current-twitter-logo-png-removebg-preview.png"
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
             src="https://o.remove.bg/downloads/8a1dcec6-ecd2-4cc1-a0f0-07fbd43a5fa7/youtube-play-logo-svg-11549681601n5d2blewku-removebg-preview.png"
             alt=""
             className="Footer__Facebook__Icon"
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
