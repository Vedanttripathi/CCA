import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import Navigation from '../Components/Navigation/Navigation';
import Content from '../Container/Content';
import Notice from '../Container/Notice/Notice';
import Intro from '../Container/Intro/Intro';
import MenuGrid from '../Container/MenuGrid/MenuGrid';
import HighLights from '../Container/Highlights/Highlights';

class Layout extends Component {
render () {
    return (
        <Aux>
            <Navigation />
            <Content />
            <Notice />
            <Intro />
            <MenuGrid />
            <HighLights />
            <div>Footer</div>
        </Aux>
    );
}
}

export default Layout;