import React, {Component} from 'react';
import classes from './Login.module.css';

class Login extends Component
{
    render () 
    {
        return (
            <div className={classes.login}>
                <div className={classes.left}>
                    <h1 className={classes.heading}>Accounts</h1>
                    <h1>Join us and million others to pursue your <span>dreams</span> and achieve your <span>goals</span></h1>
                </div>
                <div className={classes.right}>
                    <form className={classes.form}>
                        <select className={classes.select}>
                            <option value='Admin'>Admin</option>
                            <option value='Staff'>Staff</option>
                            <option value='Student'>Student</option>
                        </select>
                        <input className={classes.input} type='text' placeholder='User Id' />
                        <input className={classes.input} type='password' placeholder='Password' minLength='8' required/>
                        <div className={classes.buttons}>
                            <div className={classes.btn}><a>Login</a></div>
                            <div className={classes.btn}><a>Signup</a></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;