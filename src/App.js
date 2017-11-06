import React, { Component } from 'react';
import './App.css';
import GameContainer from './game/GameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <GameContainer />
        </main>
      </div>
    );
  }
}

export default App;
