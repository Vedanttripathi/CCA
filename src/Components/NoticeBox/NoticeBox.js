import React from 'react';
import './NoticeBox.css';

const NoticeBox = (props) => (
    <div className='noticebox'>
        <p className='date'>{props.date}</p>
        <p className='info'>{props.info}</p>
    </div>
);

export default NoticeBox;