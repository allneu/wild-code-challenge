import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import SliderCounter from './SliderCounter'
import { SliderData } from "./SliderData";
import './Images.css';
import './MainTitle.css'

function MainTitle( { current, length } ) {

    const currimg = SliderData.at(current);

return (
        <AnimatePresence>
            <motion.div className="centered transparent text"
                key={current}
                initial={{}}
                animate={{}}
                exit={{}}
                transition={{}}>
                    <h1>{currimg.text}</h1>
            </motion.div>

            <motion.div className="centered cut"
                key={current}
                initial={{}}
                animate={{}}
                exit={{}}
                transition={{}}>
                    <div className="centered full text">
                        <h1>{currimg.text}</h1>
                    </div>
            </motion.div>

            <SliderCounter current={current} length={length}/>

        </AnimatePresence>
  )
}

export default MainTitle;
