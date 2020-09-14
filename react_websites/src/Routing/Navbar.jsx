import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export default function Navbar() {          
    return(
        <>
        {/* if anchor tag is used the page is refreshed
        but the fucntion of react is not to refresh the page */}
        <div className="server"> 
            <h1>Server side reloading</h1>
            <ul>
                <li><a href="/"> About </a></li>
                <li><a href="/contact"> Contact</a></li>
            </ul> 
        </div>
        <div className="client"> 
            <h1>Client side reloading</h1>
            <ul>
                <li><Link to="/"> About </Link> </li>
                <li><Link to="/contact"> Contact</Link> </li>
            </ul> 
        </div>
        <div className="navlink"> 
            <h1>Client side reloading v2</h1>
            <ul>
                <li><NavLink exact activeClassName="active_class" to="/"> About </NavLink> </li>
                <li><NavLink exact activeClassName="active_class" to="/contact"> Contact</NavLink> </li>
            </ul> 
        </div>
            
    
        

        </>
    )
};
