import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Clock />
       <Game />
      </div>
    );
  }
}

export default App;
