import React from 'react';
import './Arrow.css'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';

const style = '';
const Arrow = (props) => {
    // if (props.show)
    // {
    //     style = 'circle'
    // }
    // else
    // {
    //     style = '';
    // }
    return (
        <div className='circle'>
            <FontAwesomeIcon icon='arrow-right' />
        </div>
    );
}

export default Arrow;