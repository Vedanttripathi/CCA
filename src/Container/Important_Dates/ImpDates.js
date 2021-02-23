import React from 'react';
import ImpDate from '../../Components/ImpDate/ImpDate';
import './ImpDates.css';

const ImpDates = () =>(
    <div className='date'>
        <h1 className='date-heading'><span>Important</span> Dates</h1>
        <div className='impdates'>
            <ImpDate date='22 Feb' desc='This is a notice description provided to see how the component is looking visually' />
            <ImpDate date='22 Feb' desc='This is a notice description provided to see how the component is looking visually' />
            <ImpDate date='22 Feb' desc='This is a notice description provided to see how the component is looking visually' />
            <ImpDate date='22 Feb' desc='This is a notice description provided to see how the component is looking visually' />
        </div>
    </div>
);

export default ImpDates;