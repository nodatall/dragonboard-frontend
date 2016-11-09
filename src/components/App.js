import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import '../styles/App.css';
import HomeNav from './HomeNav';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeNav/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
