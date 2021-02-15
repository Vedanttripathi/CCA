import React from 'react';
import './Button.css';

function Button (props){
    return (
        <a className='button'>
            {props.txt}
        </a>
    );
}; 

export default Button;