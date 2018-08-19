import React from 'react';
import "./SideDrawer.css"
const sideDrawer = props => {
   
    let drawerClass = 'side-drawer';
    
    if (props.show){
        drawerClass += ' open';
    }
    return (
       
   <nav className = {drawerClass}>
        <ul>
            <li>
                <a href="/services/real-estate">Real Estate</a>
            </li>
            <li>
                <a href="/services/tangible-personal-property">Tangible Personal Property</a>
            </li>
            <li>
                <a href="/resources">Resources</a>
            </li>
            <li>
                <a href="/services/tangible-personal-property">Contact</a>
            </li>
            <li>
                <a href="/service_fees">Service Fees</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
    )}

export default sideDrawer;