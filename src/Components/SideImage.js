import React from "react";
import { motion } from 'framer-motion'
import { SliderData } from "./SliderData";
import './Images.css';

function SideImage( { imgID, side, onClick, show} ) {

    const data = SliderData.at(imgID);

    const item = {
        hidden: { 
          opacity: 0.3,
          transition: {
            delay: 2,
            ease: "linear"
          }

         },
        show: {
          opacity: show ? 0 : 1,
          transition: {
            duration: 4,
            ease: "linear"
          },
        },
      };

    return (
        <motion.div
            className={`${side} small container`}
            layoutId={imgID}
            layout="position"
            key={imgID}
            variants={item}
            onClick={onClick}
            initial="hidden"
            animate="show"
        >
            <img src={data.image} alt={data.text}></img>
        </motion.div>
    )
}

export default SideImage;
