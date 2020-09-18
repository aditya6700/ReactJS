import React from 'react';
import ReactDOM from 'react-dom';


//     //  Challenge 1
// import App from './challenge_1/App'
// import './challenge_1/index.css'

// ReactDOM.render(<App /> ,document.getElementById("root"));

//     // challenge 2  update time
// import App from './chalenge_2/App';
// import './chalenge_2/App.css';
// ReactDOM.render(<App />, document.getElementById("root"));

//     //  challenge 3 Digital Clock
// import App from './challenge_3/App';
// import './challenge_3/App.css';
// ReactDOM.render(<App />, document.getElementById("root"));

//     //  challenge 4 INC and DEC numbers
// import App from './challenge_4/App';
// import './challenge_4/App.css';
// ReactDOM.render(<App />, document.getElementById("root"));

//     //  bootstrap website
// import App from './bootstrap_web/App';
// ReactDOM.render(<App />, document.getElementById("root"));

//     //  Todolost using useReducer
// import App from './Todolist/App';
// ReactDOM.render(<App />, document.getElementById("root"));

//     // Axios_api pokemon
// import App from './axios_api/App';
// ReactDOM.render(<App />, document.getElementById('root'));

    // final_react_website
import App from './final_react_web/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './final_react_web/index.css';
ReactDOM.render(
    <>
    <Router>
        <App />
    </Router>
    </>, 
    document.getElementById('root'));
    