import React from 'react';
import './navigation.css';
import DrawerToggle from './sideDrawer/drawerToggle';

const toolbar = props => (
    <header className = "toolbar">
        <nav className= "toolbar_nav">
            <div className="nav-toggler">
                <DrawerToggle click = {props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo">
                <a href="/"> 
                    <img src="https://s3.amazonaws.com/fpts-images/fpts_logo.png" alt=""/>
                </a>
            </div>
            <div className="spacer"/>
            <div className = "toolbar-navigation-items">
                <ul>
                    <li>
                        <a href="/resources">Resources</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>


        </nav>
    </header>
)

export default toolbar;