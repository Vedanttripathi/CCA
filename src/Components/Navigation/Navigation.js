import React, {Component} from 'react';
// import {ReactComponent as Logo} from '../../Assets/Images/Logo.svg';
import Button from '../Buttons/Button';
import './Navigation.css';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom';
 
class Navigation extends Component
{
    render () {
        return (
            <div className='topbar'>
                <Link to='/'><Logo /></Link>
                <Link to='/'><h1 className='name'>CHILDREN COLLEGE</h1></Link>
                <div className='btns'>
                <Link to='/login'><Button txt = 'Login'/></Link>
                <Link to={{
                    pathname : '/gallery'
                }}><Button txt = 'Gallery'/></Link>
                <Link to='/academics'><Button txt = 'Academics'/></Link>
                <Link to={{
                    pathname: '/admissions',
                    hash : '#menu'
                }}><Button txt = 'Admissions'/></Link>
                <Link to='/about'><Button txt = 'About'/></Link>
                <Link to='/contact'><Button txt = 'Contact'/></Link>

                </div>
            </div>
        );
    }
}

export default Navigation;