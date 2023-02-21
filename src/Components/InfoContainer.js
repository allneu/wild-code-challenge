import React from "react";
import './InfoContainer.css';
import styled from "styled-components";
import { motion } from 'framer-motion'


function InfoContainer( { data, show, showImage } ) {

    const Button = styled.button`
        background: ${props => props.hide ? "rgba(255, 255, 255, 0.226)" : "white"};
        font-size: 1.5vh;
        margin-top: 10px;
        width: 90%;
        padding: 10px;
        font-weight: bolder;
        border-radius: 20px;
        border-shadow: 2px white;
        cursor: ${props => (props.hide && show) || (!props.hide && !show) ? "pointer" : "default"}
  `;

    const info = {
        hidden: { 
            opacity: 0,
        },
        show: {
        opacity: show ? 0 : 1,
        transition: {
            duration: 1,
            delay: 1.7
        },
        },
        invertedShow: {
        opacity: show ? 1 : 0,
        y: 150,
        transition: {
            duration: 0.5,
            delay: 2
        },
        },
    };

    return (
        <>
        <motion.div 
            className="info-container"
            key={data.text}
            variants={info}
            initial="hidden"
            animate="show"
        >
            <p>{data.name}</p>
            <p>{data.mgzn}</p>
            <p className="date">{data.date}</p>

            <Button onClick={showImage}>HAVE A LOOK</Button>
        </motion.div>
        
        <motion.div
            className="info-container"
            variants={info}
            initial="hidden"
            animate="invertedShow">
            <Button hide onClick={showImage}>HIDE</Button>
        </motion.div>
        </>
    )
}

export default InfoContainer;
