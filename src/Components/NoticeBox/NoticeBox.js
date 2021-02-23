import React from 'react';
import './NoticeBox.css';

const NoticeBox = (props) => (
    <div className='noticebox'>
        <div className='notice-heading'>
            <h1>Notice</h1>
        </div>
        <div className='notice-desc'>
            <p>{props.desc}</p>
        </div>
    </div>
);

export default NoticeBox;