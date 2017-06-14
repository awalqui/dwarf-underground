import React, { Component } from 'react';
import './App.css';

import Header from './Header'

import Body from './Body'

import Ad from './Ad'

import Footer from './Footer'

import Copyright from './Copyright'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />

        <Ad />

        <Footer />
        <Copyright />

      </div>
    );
  }
}
export default App;