import React from 'react';
import image from '../../Assets/Images/img1.jpg';
import './Intro.css';

const Intro = () => (
    <div className='intro'>
        <div className='left-intro'>
            <h1>
                Welcome to the <span>future</span> of education systems
            </h1>
        </div>
        <div className='right-intro'>
            <img src={image} />
        </div>
    </div>
);

export default Intro;