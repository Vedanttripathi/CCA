import React, {Component} from 'react';
import './Content.css';
import image1 from '../Assets/Images/img1.jpg';
import image2 from '../Assets/Images/img2.jpg';
import image3 from '../Assets/Images/img3.jpg';
import image4 from '../Assets/Images/img4.jpg';
import image5 from '../Assets/Images/img5.jpg';
import CarouselTxt from '../Components/CarouselTxt/CarouselTxt';


const Content = () => (
    <div className='slide-frame'>
                <div  className='slider'>
                    <img className='image' src={image1} />
                    <img className='image' src={image2} />
                    <img className='image' src={image3} />
                    <img className='image' src={image4} />
                    <img className='image' src={image5} />
                </div>
                    <div className = 'slidemove'>
                        <div className='slidetxt'>
                            Manager Sir
                        </div>
                        <div className='slidetxt'>
                            Manager Sir
                        </div>
                        <div className='slidetxt'>
                            Manager Sir
                        </div>
                        <div className='slidetxt'>
                            Manager Sir
                        </div>
                        <div className='slidetxt'>
                            Manager Sir
                        </div>
                    </div>
            </div>
);



export default Content;