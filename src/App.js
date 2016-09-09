import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var Navbar = require('./Navbar');
var Footer = require('./Footer');

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />

          <div className="container">
              <div className="searchtron">
                  <h1>Watch what matters</h1>
                  <p><input type="text" id="movie-input" placeholder="Search for movies"/></p>
              </div>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
