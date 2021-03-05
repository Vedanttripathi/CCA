import React, {Component} from 'react';
import img1 from '../../Assets/Images/img1.jpg';
import './Gallery.css';

class Gallery extends Component
{
    state = {
        showmodal : false,
        post : null
    };

    modalhandler = () => {
        let show = this.state.showmodal;
        this.setState({showmodal : !show});
    }
    imageselector = (index) => {
        this.modalhandler();
        let image = <img src={img1} className='modal-image'/>
        this.setState({post : image});
    }

    render () {

        let posts = [];
        let i = 0;
        for (i = 0; i < 12; i++)
        {
            posts.push(<img key={i} src={img1} className='photo' onClick={() => this.imageselector(i)}/>);
        }


        return (
            <div className='gallery'>
                <div className='modal-bg' style={{display : this.state.showmodal ? 'block' : 'none'}} onClick={this.modalhandler}>
                    <div className='modal-img'>{this.state.post}</div>
                </div>
                <div className='gallery-heading'>
                    <h1>Gallery</h1>
                </div>
                <div className='gallery-section'>
                    {posts}
                </div>
            </div>
        );
    }
}

export default Gallery;