import React from 'react';
import MenuBox from '../../Components/MenuBox/MenuBox';
import NoticeBox from '../../Components/NoticeBox/NoticeBox';
import './Menu.css'

const Menu = () => 
(
    <div className='menu-container'>
        <div className='menu-left'>
            <MenuBox heading='Admission' desc='This is the menu section' />
            <MenuBox heading='Academics' desc='This is the menu section' />
            <MenuBox heading='Gallery' desc='This is the menu section' />
        </div>
        <div className='menu-right'>
            <NoticeBox desc='This is a notice' />
        </div>
    </div>
);

export default Menu;