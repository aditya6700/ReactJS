import React from 'react';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';

export default function App() {
    return(
    <div className="main_div">
    
    <div className="nav_div">
        <Navbar />
    </div> 
    
    <div className="data_div">

    {/* Switch  is switch between different paths
    and Route is to show that path to specify it we have path="" and component={}

    if we do not use use exact then "/" and "/contact" shows same page which is at first
    as both of are of same parent directry to avoid this we use  keyword "exact" */}
    
    <Switch>
        <Route exact path='/' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
    </Switch>
    </div>
    </div>
    );
};
