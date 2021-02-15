import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import Navigation from '../Components/Navigation/Navigation';

class Layout extends Component {
render () {
    return (
        <Aux>
            <Navigation />
            <div>Main Conatiner</div>
            <div>Footer</div>
        </Aux>
    );
}
}

export default Layout;