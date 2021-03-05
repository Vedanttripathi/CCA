import React, {Component} from 'react';
import Aux from '../hoc/Aux';

import Content from '../Container/Content';
import Intro from '../Container/Intro/Intro';
import HighLights from '../Container/Highlights/Highlights';
import ImpDates from '../Container/Important_Dates/ImpDates';
import Menu from '../Container/Menu/Menu';
import Locations from '../Container/Locations/Locations';


class Layout extends Component {
render () {
    return (
        <div className='layout'>
            <Content />
            <Intro />
            <ImpDates />
            <Menu id='menu'/>
            <HighLights />
            <Locations />
        </div>
    );
}
}

export default Layout;