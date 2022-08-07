import React from "react";
import "./BannerAbonner.css";
import pay from "../../assets/style/styleCardPay.png";
//import { motion } from 'framer-motion';

/*
const data = [

  {description: 'Monthly price', standard: '$1000.99', vip: '$600.99'},

]
*/

function BannerAbonner() {
  return (
    <div className="BannerAbonner">
      <div className="BannerAbonner__background">
        <div className="BannerAbonner__body">
          <h1>Select Your Plan</h1>
          <h3>Switch plans or cancel anytime.^^</h3>
          {/*<motion.img
        whileHover={{ 
              scale: 1.1,
              }}
        alt='..'
        src={coverHumaans}
        />*/}
        </div>
        <img
          whileHover={{
            scale: 1.1,
          }}
          alt=".."
          className="BannerAbonner__Style"
          src={pay}
        />
        <div className="BannerAbonner__Table">
         <div className="BannerAbonnerPopular__ui"/>
          <table>
            <thead>
              <tr>
                <th>
                  {/*<div className="BannerAbonner__Table__header">
                    <img src={logoV} alt=".." />
                    <h4> Base Plan</h4>
                  </div>*/}
                </th>
                <th>
                  <div className="BannerAbonnerPopular">
                    <button
                      className="BannerAbonnerPopular__buttonPopular"
                      type="submit"
                    >
                      Most Popular
                    </button>
                    <div className="BannerAbonnerPopular__input">
                      <h3>Vciso</h3>
                      <h4>Get First Month Free, Then</h4>
                    </div>
                  </div>
                </th>
                <th >
                  <button
                    className="BannerAbonnerPopular__button"
                    type="submit"
                  >
                    vip
                  </button>
                  <div className="BannerAbonnerPopular__input">
                    <h3>Vip Vciso</h3>
                    <h4>Get Your Own Expert</h4>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="BannerAbonner__td">Monthly price</td>
                <td className="BannerAbonner__standard">$600.99</td>
                <td className="BannerAbonner__vip">$1000.99</td>
              </tr>
              <tr>
                <td className="BannerAbonner__td">Management de la sécurité</td>
                <td className="BannerAbonner__rowGreen"></td>
                <td className="BannerAbonner__rowGreen"></td>
              </tr>
              <tr>
                <td className="BannerAbonner__td">Consulting</td>
                <td className="BannerAbonner__rowGreen"></td>
                <td className="BannerAbonner__rowGreen"></td>
              </tr>
              <tr>
                <td className="BannerAbonner__td">Sécurité opérationnelle</td>
                <td className="BannerAbonner__rowGreen"></td>
                <td className="BannerAbonner__rowGreen"></td>
              </tr>
              <tr>
                <td className="BannerAbonner__td">Gouvernance de la sécurité SI</td>
                <td className="BannerAbonner__rowGreen"></td>
                <td className="BannerAbonner__rowGreen"></td>
              </tr>
              <tr>
                <td className="BannerAbonner__td">Gestion de risques</td>
                <td className="BannerAbonner__rowGreen"></td>
                <td className="BannerAbonner__rowGreen"></td>
              </tr>
              <tr>
                <td className="BannerAbonner__td">Gestion de conformité</td>
                <td className="BannerAbonner__rowGreen"></td>
                <td className="BannerAbonner__rowGreen"></td>
              </tr>
              <tr>
                <td className="BannerAbonner__td">Architecture sécurité SI</td>
                <td className="BannerAbonner__rowRed">—</td>
                <td className="BannerAbonner__rowGreen"></td>
              </tr>
              <tr>
                <td className="BannerAbonner__td">Détection et remédiation des cybermenaces</td>
                <td className="BannerAbonner__rowRed">—</td>
                <td className="BannerAbonner__rowGreen"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BannerAbonner;
