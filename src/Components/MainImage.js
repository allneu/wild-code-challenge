import React from "react";
import { motion } from 'framer-motion'
import { SliderData } from "./SliderData"
import './Images.css';
import MainTitle from './MainTitle'

function MainImage( { current, length } ) {

    const currimg = SliderData.at(current);

return (
        <motion.div
            className="center container"
            layoutId={current}
            key={current}
            initial={{}}
            animate={{}}
            exit={{}}
            transition={{}}>

            <img src={currimg.image} alt={currimg.text}></img>

            <MainTitle current={current} length={length}/>

        </motion.div>
  )
}

export default MainImage;
