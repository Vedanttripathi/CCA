import React from 'react';
import './Intro.css';

const Intro = () => (
    <div className='intro-main-container'>
        <h1 className='intro-heading'>Children College & Schools</h1>
        <div className='intro-container'>
            <div className='intro-left'><h1>Welcome to the <span>future</span> education systems</h1></div>
            <div className='intro-right'>
                <p>Crazy right? It's the virtual front door of the campus. This website needs to attract and inform current and prospective students, their families, alumni, professors, and donors. It has to be user-friendly, convey value to different personas, and guide visitors to other parts of the site. Oh, and it should also be visually pleasing. </p>
                <div className='more-btn'>
                    <a>More</a>
                </div>
            </div>
        </div>
    </div>
);

export default Intro;