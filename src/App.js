import React, { useState } from "react";
import { motion } from "framer-motion";

import { SliderData } from "./Components/SliderData";
import MainImage from "./Components/MainImage";
import SideImage from "./Components/SideImage";
import InfoContainer from "./Components/InfoContainer";

import "./App.css";

function App() {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(nextSlideNumber());
  };

  const prevSlide = () => {
    setCurrent(prevSlideNumber());
  };

  const nextSlideNumber = () => {
    return current === length - 1 ? 0 : current + 1;
  };

  const prevSlideNumber = () => {
    return current === 0 ? length - 1 : current - 1;
  };

  const showImage = () => {
    setShow(!show);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  const currimg = SliderData.at(current);

  return (
    <div>
      <div className="top-bar">
        <p>XYZ PHOTOGRAPHY</p>
      </div>

      <div className="containers">
        <SideImage
          imgID={prevSlideNumber()}
          side="left"
          onClick={prevSlide}
          show={show}
        />
        <MainImage
          current={current}
          length={length}
          showImage={showImage}
          show={show}
        />
        <SideImage
          imgID={nextSlideNumber()}
          side="right"
          onClick={nextSlide}
          show={show}
        />
      </div>

      <InfoContainer data={currimg} show={show} showImage={showImage} />

      <motion.div className="background">
        <img src={currimg.small_image} id="bck-img" alt={currimg.text} />
      </motion.div>
    </div>
  );
}

export default App;
