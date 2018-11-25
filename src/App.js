import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Organizers from './components/Organizers';
import Partners from './components/Partners';
import Navbar from './components/CustomNavbar';
import Particles from './components/Particles';
import Hackathon from './components/Hackathon';
import Register from './components/Register';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css"


let height = 0;


class App extends Component {
  state = {
    dimensions: null
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize)
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      },
    });
    height = this.container.offsetHeight;
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => this.forceUpdate()

  isSameSize = () => {
    if(this.state.dimensions !== null) {
      const {height, width} = this.state.dimensions
      if (height !== this.container.offsetHeight || width !== this.container.offsetWidth) {
        this.setState({
          dimensions: {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
          }
        })
      }
    }
  }

  render() {
    this.isSameSize();
    return (
          <Router>
            <Route
              render={({location}) => (
              <div style={styles.fill}>
                <Particles/>
                <div ref={el => (this.container = el)}>
                <Navbar/>
                </div>
                {this.state.dimensions && <div style={{...styles.fill, top: this.state.dimensions.height+ 90}}>
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={100}
                  >
                    <Switch location={location}>
                      <Route exact path="/hackathon" component={Hackathon} />
                      <Route exact path="/organizers" component={Organizers} />
                      <Route exact path="/partners" component={Partners} />
                      <Route exact path="/register" component={Register} />
                      <Route exact path="/" component={Home} />

                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                </div>}
              </div>
              )}/>
          </Router>
    );
  }
}

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};



export default App;
