import React, { Component } from 'react';
import WebRouter from './WebRouter';
import Navigation from './components/global/Navbar/navigation';
import SideDrawer from './components/global/sideDrawer/sideDrawer';
import Backdrop from './components/global/Backdrop/Backdrop';
import Footer from './components/global/Footer/footer2';


class App extends Component {
  state = {
    open:false,

  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { open: !prevState.open}
    } )
  };

  backdropClickHandler = () =>{
    this.setState({
      open: false
    });
  };
  render() {
    let backdrop;

    if (this.state.open){

      backdrop = <Backdrop click = {this.backdropClickHandler}/>;
    }

    return (
      <div className="App content">
        <Navigation drawerClickHandler = {this.drawerToggleClickHandler}/>
        <SideDrawer show= {this.state.open}/>
        {backdrop}
        <WebRouter/>
        <Footer className = "footer"/>
      </div>
    );
  }
}

export default App;
