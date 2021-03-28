import React from 'react';
import Arrow from '../Arrow/Arrow';
import './MenuBox.css'
import {Link} from 'react-router-dom'


const MenuBox = (props) => 
(
    <div className='menubox'>
        <div className='menu-heading'><h1>{props.heading}</h1></div>
        <div className='menu-desc'><p>{props.desc}</p></div>
        <div className='arrow-section'>
            <Link to={props.path}>
                <div className='arrow-icon'>
                    <Arrow />
                </div>
            </Link>
        </div>
    </div>
);


export default MenuBox;

