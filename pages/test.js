import React from 'react';
import Slider from "react-slick";

const test = () => {
    return (
        <div>
            <Slider>
                <div className="slide">Primera Slide</div>
                <div className="slide">Segunda Slide</div>
                <div className="slide">Tercera Slide</div>
            </Slider>
            
        </div>
    );
}

export default test;
