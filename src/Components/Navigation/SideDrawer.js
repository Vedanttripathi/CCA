import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';

const SideDrawer = () => (
    <div className='sidedrawer'>
        <div className='cross'>+</div>
        <ul className='sidelist'>
                <Link to='/login'><li className='side-element'>Login</li></Link>
                <Link to={{
                    pathname : '/gallery'
                }}><li className='side-element'>Gallery</li></Link>
                <Link to='/academics'><li className='side-element'>Academics</li></Link>
                <Link to={{
                    pathname: '/admissions',
                    hash : '#menu'
                }}><li className='side-element'>Admissions</li></Link>
                <Link to='/about'><li className='side-element'>About</li></Link>
                <Link to='/contact'><li className='side-element'>Contact</li></Link>
        </ul>
    </div>
);

export default SideDrawer;