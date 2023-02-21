import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { SliderData } from "./SliderData"
import './Images.css';
import MainTitle from './MainTitle'

function MainImage( { current, length, show} ) {

    const currimg = SliderData.at(current);
      
      const itemMain = {
        hidden: { 
            scale: 0.8,
            opacity: 0.3,
            transition: {
                delay: 1,
                ease: "linear",
            }
        },
        show: {
          scale: show ? 1.2 : 1,
          opacity: 1,
          transition: {
            duration: 2,
            ease: "linear"
          },
        },
      };

return (
        <motion.div
            className="center container"
            layoutId={current}
            key={current}
            variants={itemMain}
            initial="hidden"
            animate="show"
            >

            <img src={currimg.image} alt={currimg.text}></img>

            <MainTitle current={current} length={length} show={show}/>

        </motion.div>
  )
}

export default MainImage;
