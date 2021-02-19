import React from 'react';
import NoticeBox from '../../Components/NoticeBox/NoticeBox';
import './Notice.css';

const Notice = () => (
    <div className="notice">
        <div className='noticeheading'>
            <h1>Notice</h1>
        </div>
        <div className='noticesection'>
            <NoticeBox date='01-01-2021' info='This is a notice for you' />
            <NoticeBox date='01-01-2021' info='This is a notice for you' />
            <NoticeBox date='01-01-2021' info='This is a notice for you' />
        </div>
    </div>
);

export default Notice;