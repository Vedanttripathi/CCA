import React from 'react';
import './MenuGrid.css';

const MenuGrid = () => (
    <div className='menugrid'>
        <div className='admissions'>
                <p className='font'>Admission</p>
            </div>
            <div className='academics'>
                <p className='font'>Academics</p>
            </div>
            <div className='gallery'>
                <p className='font'>Gallery</p>
            </div>
            <div className='blog'>
                <p className='font'>Our Blog</p>
            </div>
    </div>
);

export default MenuGrid;