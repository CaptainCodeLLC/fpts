import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/LandingSplash';
import Resources from './components/pages/Resources';
import News from './components/pages/News_Notes';
import About from './components/pages/About'
import RealEstate from './components/pages/RealEstate';
import TangiblePersonalProperty from './components/pages/TangiblePersonalProperty';
import ServiceFees from './components/pages/ServiceFees';
const WebRouter = () => (
    <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/resources" component = {Resources}/>
        <Route exact path = "/news_notes" component = {News}/>
        <Route exact path = "/about" component = {About}/>
        <Route exact path = "/real_estate_property" component = {RealEstate}/>
        <Route exact path = "/tangible_personal_property" component = {TangiblePersonalProperty}/>
        <Route exact path = "/service_fees" component = {ServiceFees}/>
    </Switch>
    
);  

export default WebRouter;