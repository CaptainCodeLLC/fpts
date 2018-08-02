import React, { Component } from '../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react/../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';


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
