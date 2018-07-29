import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
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
