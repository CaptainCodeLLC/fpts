import React, { Component } from 'react';
import WebRouter from './WebRouter';
import AppNavbar from './components/global/appNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <WebRouter/>
      </div>
    );
  }
}

export default App;
