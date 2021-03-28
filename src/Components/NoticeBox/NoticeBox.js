import React, {Component} from 'react';
import './NoticeBox.css';

class NoticeBox extends Component {
    render () {

        let bullets = this.props.desc.map(bullet => {
            return <li>{bullet}</li>
        })
        return (
            <div className='noticebox'>
        <div className='notice-heading'>
            <h1>Notice</h1>
        </div>
        <div className='notice-desc'>
            <ul>
                {bullets}
            </ul>
        </div>
    </div>
        );
    }
}

export default NoticeBox;