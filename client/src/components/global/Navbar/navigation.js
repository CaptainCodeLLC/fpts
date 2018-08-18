import React from 'react';
import './navigation.css';
import DrawerToggle from '../sideDrawer/drawerToggle';
import {DropdownToggle, UncontrolledDropdown, DropdownItem, DropdownMenu} from 'reactstrap'

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
                        <a href="/#news">News & Info</a>
                    </li>
                    <li>
                        <a href="/resources">Resources</a>
                    </li>
                    
                    <li>
                        <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle style = {{padding:0}}  className="nav-link">
                            Services
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag="a" href="/services/real-estate" active>Real Estate</DropdownItem>
                            <hr style = {{color:'orange',margin:0}}/>
                            <DropdownItem tag="a" href="/services/tangible-personal-property" active>Tangible Personal Property</DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                     
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/#contact">Contact</a>
                    </li>
                </ul>
            </div>


        </nav>
    </header>
)

export default toolbar;