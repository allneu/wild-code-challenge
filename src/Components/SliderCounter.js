import React from "react";
import './SliderCounter.css';

function SliderCounter( { current, length } ) {

    const dots = [];

    for (let i=0; i<length; i++) {
        if (current === i) {
            dots.push(<span id="dot" className="active"></span>);
        } else {
            dots.push(<span id="dot"></span>);
        }
    }

    return (
        <div className="slide-bar">
            <p className="counter">{current + 1} OF 5</p>
            {dots}
        </div>
    )
}

export default SliderCounter;
