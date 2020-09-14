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
    <Switch>
        <Route exact path='/' component={About} />
        <Route path='/contact' component={Contact} />
        <Route component={Error} />
    </Switch>
    </div>
    </div>
    );
};
