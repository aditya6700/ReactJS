import React from 'react';
import {Route, Switch, useHistory, useLocation, useParams} from 'react-router-dom';
import Navbar from '../Route_Render/Navbar';
import Search from './Search';
import Error from '../Routing/Error';

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


    const User = () => {
        const { name, part } = useParams();
        const Location = useLocation();
        const history = useHistory();
        console.log(Location,history); // have a look of properties available

        return( 
            <>
                <h1> My name is {name} </h1>
                <h3> My part is {part} </h3> <br />
                <div className="center">
                    <p> My current location is {Location.pathname} </p><br />
                    <button onClick={() => history.goBack()}> go back </button>
                    <button onClick={() => history.push("/search")}> Home </button>
                    {Location.pathname === `/user/Sai Aditya/Frontend UI` ? 
                    <button onClick={() => alert("success!")}> click me </button> : null }
                </div>
            </>
            );   
    } 

    return(
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" render = {() => <About  name="About" /> } />
                <Route exact path="/contact" render = {() => <Contact name="Contact" /> }  />
                <Route exact path="/project" component={Project} />
                <Route exact path="/user/:name/:part" component={User} />
                <Route exact path="/search" component={Search} />
                <Route render={Error} />
            </Switch>
        </>
    )
};