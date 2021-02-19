import React from 'react';
import './Highlight.css';

const Highlight = (props) => 
(
    <div className='box'>
        <p className='number'>
            {props.number}
        </p>
        <p className='type'>
            {props.type}
        </p>
    </div>
);


export default Highlight;