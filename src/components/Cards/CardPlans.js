import React from "react";
import PropTypes from "prop-types";
import './CardPlans.css';
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CardPlans({
 
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
            className="CardPlans"> 
        <div className="CardPlans__input">
            <h3>{statTitleModel}</h3>
            <h4>{statMarque}</h4>
        </div>
        <h4>
        <span className="CardPlans__price">{statPrice}</span>
        <span className="CardPlans__period">/month</span>
        </h4>
        <p>
          <span className="CardPlans__description">{statDescripiron}</span>
        </p>
        <button className="CardPlans__button" 
          type="submit"
          onClick={()=> navigate('/createAccount')}
          >
          Select
        </button>
      </motion.div>


    </>
  );
}

CardPlans.propTypes = {
  statTitleModel: PropTypes.string,
  statMarque: PropTypes.string,
  statPrice: PropTypes.string,
  statDescripiron: PropTypes.string,
};
