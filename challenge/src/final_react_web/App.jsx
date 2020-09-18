import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import Footer from './Footer';

export default function App() {
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error} />
        </Switch>
        <Footer />
        </>
    );
};