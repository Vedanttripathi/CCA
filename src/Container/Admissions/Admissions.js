import React, {Component} from 'react';
import classes from './Admissions.module.css';

class Admissions extends Component
{
    render () {
        return (
            <div className={classes.admission}>
                <h1>Enter your details</h1>
                <form className={classes.form}>
                    <div className={classes.row}>
                        <input className={classes.input} placeholder='Name' />
                        <input className={classes.input} placeholder='Class' />
                    </div>
                    <div className={classes.row}>
                        <input className={classes.input} placeholder="Father's Name" />
                        <input className={classes.input} placeholder="Mother's Name" />
                    </div>
                    <div className={classes.row}>
                        <input className={classes.input} placeholder='Mobile no' />
                        <input className={classes.input} placeholder='Alternate Mobile no' />
                    </div>
                    <div className={classes.row}>
                        <input className={classes.input} placeholder='Email (Optional)' />
                        <input className={classes.input} placeholder='Class' />
                    </div>
                    <div className={classes.row}>
                        <input className={classes.address} placeholder='Address' />
                    </div>
                    <div className={classes.row}>
                        <input className={classes.input} placeholder='District' />
                        <input className={classes.input} placeholder='ZipCode' />
                    </div>
                    <div className={classes.row}>
                        <div className={classes.btns}>Download Pdf</div>
                        <div className={classes.btns}>Submit</div>
                    </div>
                </form>
            </div>
        );
    }
}


export default Admissions;