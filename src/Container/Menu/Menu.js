import React from 'react';
import MenuBox from '../../Components/MenuBox/MenuBox';
import NoticeBox from '../../Components/NoticeBox/NoticeBox';
import './Menu.css'

const Menu = () => 
{
    let noticedesc = [];
    for (let i = 0; i < 10; i++)
    {
        noticedesc.push('This is a notice for the people visiting the site');
    }
   return( <div className='menu-container'>
        <div className='menu-left'>
            <MenuBox id='admission' heading='Admission' desc='This is the menu section' path='/admissions' />
            <MenuBox heading='Academics' desc='This is the menu section' path='/academics' />
            <MenuBox heading='Gallery' desc='This is the menu section' path='/gallery' />
        </div>
        <div className='menu-right'>
            <NoticeBox desc={noticedesc} />
        </div>
    </div>
   );
};

export default Menu;