import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import Navigation from '../Components/Navigation/Navigation';
import Content from '../Container/Content';
import Notice from '../Container/Notice/Notice';

class Layout extends Component {
render () {
    return (
        <Aux>
            <Navigation />
            <Content />
            <Notice />
            <div>Footer</div>
        </Aux>
    );
}
}

export default Layout;