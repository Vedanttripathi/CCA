import React from 'react';
import Highlight from './Highlight';
import './Highlights.css';

const HighLights = () => (
    <div className='highlights'>
        <Highlight number='3000+' type='Students' />
        <Highlight number='300' type='Staff' />
        <Highlight number='30+' type='Courses' />
        <Highlight number='45' type='Years of Excellence' />
    </div>
);

export default HighLights;