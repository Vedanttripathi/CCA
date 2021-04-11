import React from 'react';
import Logo from '../../Assets/Images/Logo4x.png';
import './Header.css';

const Header = () => (
    <div className="header">
        <img className="header-logo" src = {Logo} />
        <h1 className='name'>CHILDREN COLLEGE</h1>
    </div>
);


export default Header;