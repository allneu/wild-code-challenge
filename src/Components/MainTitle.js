import React from "react";
import { AnimatePresence, motion } from 'framer-motion'
import SliderCounter from './SliderCounter'
import { SliderData } from "./SliderData";
import './Images.css';
import './MainTitle.css'

function MainTitle( { current, length, show } ) {

    const currimg = SliderData.at(current);

    const title = {
        hidden: { 
            opacity: 0,
        },
        show: {
          opacity: show ? 0 : 1,
          transition: {
            duration: 1,
            delay: 1,
          },
        },
        exit: {
            opacity: 0,
            transition: {
              duration: 1,
            }
          }
      };

return (
        <AnimatePresence>
            <motion.div 
                className="centered transparent text"
                key={current}
                variants={title}
                initial="hidden"
                animate="show"
                exit="exit"
                >
                    <h1>{currimg.text}</h1>
            </motion.div>

            <div 
                className="centered cut"
                >
                    <motion.div 
                        className="centered full text"
                        key={current}
                        variants={title}
                        initial="hidden"
                        animate="show"
                    >
                        <h1>{currimg.text}</h1>
                    </motion.div>
            </div>

            <motion.div
                variants={title}
                initial="hidden"
                animate={{
                    opacity: show ? 0 : 0.8,
                    transition: {
                      duration: 0.5,
                      delay: 1
                    },
                }}
                >
                <SliderCounter current={current} length={length}/>
            </motion.div>

        </AnimatePresence>
  )
}

export default MainTitle;
