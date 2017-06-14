import React, { Component } from 'react';
import './App.css';

import Header from './Header'

import Body from './Body'

import Ad from './Ad'

import OtherArticles from './OtherArticles'

import Copyright from './Copyright'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />

        <Ad />

        <OtherArticles />
        <Copyright />

      </div>
    );
  }
}
export default App;