import React, {Component} from 'react';
import './Content.css';
import image1 from '../Assets/Images/img1.jpg';
import image2 from '../Assets/Images/img2.jpg';
import image3 from '../Assets/Images/img3.jpg';
import image4 from '../Assets/Images/img4.jpg';
import image5 from '../Assets/Images/img5.jpg';


const Content = () => (
    <div className='slide-frame'>
                <div  className='slider'>
                    <div className='image'><img src={image1} /></div>
                    <div className='image'><img src={image2} /></div>
                    <div className='image'><img src={image3} /></div>
                    <div className='image'><img src={image4} /></div>
                    <div className='image'><img src={image5} /></div>
                </div>
                    <div className = 'slidemove'>
                        <div className='slidetxt'>
                            <p>Manager Sir</p>
                        </div>
                        <div className='slidetxt'>
                            <p>Manager Sir</p>
                        </div>
                        <div className='slidetxt'>
                            <p>Manager Sir</p>
                        </div>
                        <div className='slidetxt'>
                            <p>Manager Sir</p>
                        </div>
                        <div className='slidetxt'>
                            <p>Manager Sir</p>
                        </div>
                    </div>
            </div>
);



export default Content;