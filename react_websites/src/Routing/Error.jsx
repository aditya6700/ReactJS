import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Error() {
    return (
    <>
    <h1> Error 404 page not found</h1>
    <NavLink activeClassName="active_error" to="/"> go back </NavLink>
    </>
    );
};
