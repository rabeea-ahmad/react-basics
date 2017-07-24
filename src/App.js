import React, { Component } from 'react';
import Profile from './Profile.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile artist="Jay-Z" album="4:44"/>
        <button className="App-button"> Play Album </button>
      </div>
    );
  }
}

export default App;
