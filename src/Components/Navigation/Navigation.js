import React, {Component} from 'react';
// import {ReactComponent as Logo} from '../../Assets/Images/Logo.svg';
import Button from '../Buttons/Button';
import './Navigation.css';
import Logo from '../Logo/Logo';

class Navigation extends Component
{
    render () {
        return (
            <div className='topbar'>
                <Logo />
                <h1 className='name'>CHILDREN COLLEGE</h1>
                <div className='btns'>
                <Button txt = 'Login'/>
                <Button txt = 'Signup'/>
                <Button txt = 'Academics'/>
                <Button txt = 'Admissions'/>
                <Button txt = 'About'/>
                <Button txt = 'Contact'/>

                </div>
            </div>
        );
    }
}

export default Navigation;