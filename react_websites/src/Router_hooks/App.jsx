import React from 'react';
import {Route, Switch, useHistory, useLocation, useParams} from 'react-router-dom';
import Navbar from '../Route_Render/Navbar';

export default function App() {

    const About = (props) => {
        return( <h1> This is {props.name} Page </h1> );
    };

    const Contact = (props) => {
        return( <h1> This is {props.name} Page </h1> );    
    };

    const Project = () => {
        return( <h1> This is Project Page </h1> );
    }

    //  // without Hooks
    // const User = ({ match }) => {
    //     return( <h1> This is {match.params.name}'s  Page </h1> )
    // }

    // Router hooks
    // 1. useParams 
    //     returns an object of key/value pairs of URL parameters. 
    //     Use it to access match.params of the current <Route>.
    //     you can use as many as params but make you use object destructuring
    // 2. useLocation
    //     returns the location object that represents the current URL
    // 3. useHistory
    //     gives you access to the history instance that you may use to navigate.
    //     history.goBack() = returns to the previous path
    //     history.push("your url goes here") = redirects to the specified URL

    const User = () => {
        const { name, part } = useParams();
        const Location = useLocation();
        const history = useHistory();
        console.log(Location,history); // have a look of properties available

        return( 
            <>
                <h1> My name is {name} </h1>
                <h3> My part is {part} </h3> <br />
                <p> My current location is {Location.pathname} </p>
                <button onClick={() => history.goBack()}> go back </button>
                <button onClick={() => history.push("/")}> Home </button>
                {Location.pathname === `/user/Sai Aditya/Frontend UI` ? 
                <button onClick={() => alert("success!")}> click me </button> : null }
            </>
            );   
    } 

    return(
        <>
            <Navbar />
            <Switch>
            <div className="content">
                <Route exact path="/" render = {() => <About  name="About" /> } />
                <Route exact path="/contact" render = {() => <Contact name="Contact" /> }  />
                <Route exact path="/project" component={Project} />
                <Route exact path="/user/:name/:part" component={User} />
            </div>
            </Switch>
        </>
    )
};