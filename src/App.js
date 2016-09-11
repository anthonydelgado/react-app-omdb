import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
var Navbar = require('./Navbar');
var Footer = require('./Footer');
var Movies = require('./Movies');
// Search
var Search = require('./Search');

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />

          <Movies search={this.movieSearchTerm} />

      </div>
    );
  }
}

export default App;
