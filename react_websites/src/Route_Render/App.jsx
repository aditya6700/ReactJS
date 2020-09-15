import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Error from '../Routing/Error';

// there is no performance different between component and render prop 
// if you there are no props use component={AppComponent} directly, 
// if you want to assign some props to AppComponent, 
// use render={() => <AppComponent {...props}/> } 
// instead of component={() => <AppComponent {...props}/> }

export default function App() {

    const About = (props) => {
        return( <h1> This is {props.name} Page </h1> );
    };

    const Contact = (props) => {
        return( <h1> This is {props.name} Page </h1> );    
    };

    const Project = () => {
        return( <h1> This is Project Page </h1> )
    }
   
    return(
        <>
            <Navbar />
            <Switch>
            <div className="content">
                <Route exact path="/" render = {() => <About  name="About" /> } />
                <Route exact path="/contact" render = {() => <Contact name="Contact" /> }  />
                <Route exact path="/project" component={Project} />
                <Route component={Error} />
            </div>
            </Switch>
        </>
    )
};