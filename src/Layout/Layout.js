import React, {Component} from 'react';
import Aux from '../hoc/Aux';
import Navigation from '../Components/Navigation/Navigation';
import Content from '../Container/Content';
import Intro from '../Container/Intro/Intro';
import HighLights from '../Container/Highlights/Highlights';
import ImpDates from '../Container/Important_Dates/ImpDates';
import Menu from '../Container/Menu/Menu';
import Locations from '../Container/Locations/Locations';
import Footer from '../Container/Footer/Footer';

class Layout extends Component {
render () {
    return (
        <Aux>
            <Navigation />
            <Content />
            <Intro />
            <ImpDates />
            <Menu />
            <HighLights />
            <Locations />
            <Footer />
        </Aux>
    );
}
}

export default Layout;