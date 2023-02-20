import React, { useState } from "react";
import { SliderData } from './Components/SliderData';
import "./App.css";
import MainImage from "./Components/MainImage";
import SideImage from "./Components/SideImage";
import InfoContainer from "./Components/InfoContainer";

function App() {

    const [current, setCurrent] = useState(0);
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
                <SideImage imgID={prevSlideNumber()} side='left' onClick={prevSlide}/>
                <MainImage current={current} length={length}/>
                <SideImage imgID={nextSlideNumber()} side='right' onClick={nextSlide}/>
            </div>

            <InfoContainer data={currimg}/>

            <div className="background">
                <img src={currimg.small_image} id="bck-img" alt={currimg.text}/>
            </div>

        </div>
    );
}

export default App;
