import React from 'react';
import './CarouselTxt.css';

const CarouselTxt = (props) => 
(
    <div className='txtcard'>
        <p>{props.txt}</p>
    </div>
);

export default CarouselTxt;