import React from 'react';
import Arrow from '../Arrow/Arrow';
import './MenuBox.css'


const MenuBox = (props) => 
(
    <div className='menubox'>
        <div className='menu-heading'><h1>{props.heading}</h1></div>
        <div className='menu-desc'><p>{props.desc}</p></div>
        <div className='arrow-section'>
            <div className='arrow-icon'>
                <div className='arrow'></div>
            </div>
        </div>
    </div>
);


export default MenuBox;

