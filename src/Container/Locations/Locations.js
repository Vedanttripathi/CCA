import React from 'react';
import './Locations.css'

const Locations = () => 
(
    <div className='locations'>
        <div className='locations-heading'>
            <h1>Locations</h1>
        </div>
        <div className='map'>
            <div className='fake-map'></div>
        </div>
        <div className='locations-list'>
            <ul>
                <li>ICSE Board</li>
                <li>CBSE Board Boys Wing</li>
                <li>UP Board</li>
                <li>CBSE Girls Wing</li>
            </ul>
        </div>
    </div>
);


export default Locations;