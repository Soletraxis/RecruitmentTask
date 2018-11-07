import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Organizers from './components/Organizers';
import Partners from './components/Partners';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Hackathon from './components/Hackathon';
import Register from './components/Register';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Route
              render={({location}) => (
              <div>
                <Particles/>
                <Navbar />
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
                <Footer/>

              </div>
              )}/>
          </Router>
      </div>
    );
  }
}

export default App;
