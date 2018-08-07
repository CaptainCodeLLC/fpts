import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/LandingSplash';
import Resources from './components/pages/Resources';



const WebRouter = () => (
    <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/resources" component = {Resources}/>
    </Switch>
    
);

export default WebRouter;