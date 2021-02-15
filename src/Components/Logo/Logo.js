import React from 'react';
import ccalogo from '../../Assets/Images/Logo.png';
import './Logo.css';

const logo = (props) => (
    <div >
        <img className = 'logo' src = {ccalogo} />
    </div>
);

export default logo;