import React, {Component} from 'react';
// import {ReactComponent as Logo} from '../../Assets/Images/Logo.svg';
import Button from '../Buttons/Button';
import './Navigation.css';
import Logo from '../Logo/Logo';
import {NavLink, Link} from 'react-router-dom';
import SideDrawer from './SideDrawer';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
class Navigation extends Component
{
    
    render () {
        return (
            <div className='topbar'>
                {/* <Link to='/'><Logo /></Link>
                <Link to='/'><h1 className='name'>CHILDREN COLLEGE</h1></Link> */}
                <div className='btns'>
                <NavLink to='/' exact><Button txt = 'Home'/></NavLink>
                <NavLink to='/login'><Button txt = 'Login'/></NavLink>
                <NavLink to={{
                    pathname : '/gallery'
                }}><Button txt = 'Gallery'/></NavLink>
                <NavLink to='/academics'><Button txt = 'Academics'/></NavLink>
                <NavLink to={{
                    pathname: '/admissions',
                    hash : '#menu'
                }}><Button txt = 'Admissions'/></NavLink>
                <NavLink to='/about'><Button txt = 'About'/></NavLink>
                <NavLink to='/contact'><Button txt = 'Contact'/></NavLink>

                </div>
                <div className='hamburger' style={{'color' : this.props.showDrawer ? 'black' : 'white',}} onClick={this.drawHandler}><FontAwesomeIcon icon={faBars} size='2x'/></div>
                
            </div>
        );
    }
}

export default Navigation;