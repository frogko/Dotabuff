import React, { Component } from 'react';
import Toolbar from '../UI/Toolbar/Toolbar';
import HeroesPage from '../Heroes/HeroesPage';

class App extends Component {
  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor:'#1C242D', paddingLeft: 0, paddingRight: 0 }}>
        <Toolbar />
        <HeroesPage />
      </div>
    )
  }
}

export default App;