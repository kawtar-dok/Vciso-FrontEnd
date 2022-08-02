import React from "react";
import PropTypes from "prop-types";
import './CardVip.css';
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CardVip({
    
 
  statTitleModel,
  statMarque,
  statPrice,
  statDescripiron,

}) {
    const navigate = useNavigate();
  return (
    <>
      <motion.div 
       whileHover={{
                  scale: 1.1,
                }}
            className="CardVip"> 
        <div className="CardVip__input">
            <h3>{statTitleModel}</h3>
            <h4>{statMarque}</h4>
        </div>
        <h4>
        <span className="CardVip__price">{statPrice}</span>
        <span className="CardVip__period">/month</span>
        </h4>
        <p>
          <span className="CardVip__description">{statDescripiron}</span>
        </p>
        <button className="CardVip__button" type="submit"
        onClick={()=> navigate('/createAccount')}>
          Select
        </button>
      </motion.div>


    </>
  );
}

CardVip.propTypes = {
  statTitleModel: PropTypes.string,
  statMarque: PropTypes.string,
  statPrice: PropTypes.string,
  statDescripiron: PropTypes.string,
};
