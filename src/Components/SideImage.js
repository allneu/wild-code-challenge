import React from "react";
import { motion } from 'framer-motion'
import { SliderData } from "./SliderData";
import './Images.css';

function SideImage( { imgID, side, onClick } ) {

    const data = SliderData.at(imgID);

    return (
        <motion.div
            className={`${side} small container`}
            layoutId={imgID}
            key={imgID}
            onClick={onClick}
            initial={{}}
            animate={{}}
            transition={{}}
        >
            <img src={data.small_image} alt={data.text}></img>
        </motion.div>
    )
}

export default SideImage;
