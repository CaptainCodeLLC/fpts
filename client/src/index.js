import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';


const app = <ParallaxProvider>
              <BrowserRouter>
                <App/>
              </BrowserRouter>
            </ParallaxProvider>


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
