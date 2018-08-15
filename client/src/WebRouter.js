import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/LandingSplash';
import Resources from './components/pages/Resources';
import News from './components/pages/News_Notes';
import About from './components/pages/About'


const WebRouter = () => (
    <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/resources" component = {Resources}/>
        <Route exact path = "/news_notes" component = {News}/>
        <Route exact path = "/about" component = {About}/>
        
    </Switch>
    
);

export default WebRouter;