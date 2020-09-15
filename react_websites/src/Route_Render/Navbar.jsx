import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {         
    return(
        <>
        <div className="navlink"> 
            <NavLink exact activeClassName="active_class" to="/"> About </NavLink> 
            <NavLink exact activeClassName="active_class" to="/user/Sai%20Aditya/Frontend%20UI"> User</NavLink> 
            <NavLink exact activeClassName="active_class" to="/project"> Project</NavLink>
            <NavLink exact activeClassName="active_class" to="/search"> Live Search</NavLink>
            <NavLink exact activeClassName="active_class" to="/contact"> Contact</NavLink>
        </div>
        </>
    )
};
