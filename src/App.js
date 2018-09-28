import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Organizers from './components/Organizers';
import Partners from './components/Partners';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import Particles from './components/Particles';
import Hackathon from './components/Hackathon';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                  <Particles/>
                  <Navbar />
                  <Route exact path="/" component={Home} />
                  <Route path="/hackathon" component={Hackathon} />
                  <Route path="/organizers" component={Organizers} />
                  <Route path="/partners" component={Partners} />
                  <Footer/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
