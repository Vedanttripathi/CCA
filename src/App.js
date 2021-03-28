import './App.css';
import React, {Component} from 'react'
import Layout from './Layout/Layout';
import Gallery from './Layout/Gallery/Gallery';
import Navigation from './Components/Navigation/Navigation';
import Aux from './hoc/Aux';
import {Route} from 'react-router-dom'
import About from './Container/About/About';
import Footer from './Container/Footer/Footer';
import Academics from './Container/Academics/Academics';
import Login from './Container/Login/Login';
import Admissions from './Container/Admissions/Admissions';
import SideDrawer from './Components/Navigation/SideDrawer';

class App extends Component {

  state = {
    showDrawer : false
};

drawHandler = () => {
    const curr = this.state.showDrawer;
    this.setState({ showDrawer : !curr });
}

  render () {
    return (
      <Aux>
        <Navigation drawHandler = {this.drawHandler} showDrawer = {this.state.showDrawer}/>
        <div className='sidedrawer-div' style={{'display' : this.state.showDrawer ? 'block' : 'none'}}><SideDrawer /></div>
        <Route path="/" exact component={Layout} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/about" exact component={About} />
        <Route path="/academics" exact component={Academics} />
        <Route path='/login' exact component={Login} />
        <Route path='/admissions' exact component={Admissions} />
        <Footer />
      </Aux>
    );
  }
}

export default App;
