import React from "react";
import PropTypes from "prop-types";
import './CardPlansPopular.css';
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CardPlansPopular({
 
  statTitleModel,
  statMarque,
  statPrice,
  statDescripiron,

}) {
  const navigate = useNavigate();
  return (
    <>
      <motion.div 
       
       initial={{ scale:1.1}}
       whileHover={{
                  scale: 1.2,
                }}
          className="CardPlansPopular"> 
         <button className="CardPlansPopular__buttonPopular" type="submit">
          Most Popular
        </button>
        <div className="CardPlansPopular__input">
            <h3>{statTitleModel}</h3>
            <h4>{statMarque}</h4>
        </div>
        <h4>
        <span className="CardPlansPopular__price">{statPrice}</span>
        <span className="CardPlansPopular__period"> /month</span>
        </h4>
        <p>
          <span className="CardPlansPopular__description">{statDescripiron}</span>
        </p>
        <button className="CardPlansPopular__button" 
          onClick={()=> navigate('/createAccount')}
          type="submit">
          Select
        </button>
      </motion.div>


    </>
  );
}

CardPlansPopular.propTypes = {
  statTitleModel: PropTypes.string,
  statMarque: PropTypes.string,
  statPrice: PropTypes.string,
  statDescripiron: PropTypes.string,
};
