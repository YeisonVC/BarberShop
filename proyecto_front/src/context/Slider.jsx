import React from 'react';

import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";



function Slider() {

    return (
        <div className='slider-frame'>
            <ul>
                <div className='imagen1'></div>
                <div className='imagen2'></div>
                <div className='imagen3'></div>
                <div className='imagen4'></div>
            </ul>
        </div>
    )
}

export default Slider;