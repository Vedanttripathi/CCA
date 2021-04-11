import React from 'react';
import './Button.css';

function Button (props){
    return (
        <div className='button'>
            <a >
            {props.txt}
        </a>
        </div>
    );
}; 

export default Button;