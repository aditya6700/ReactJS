import React from 'react';
import ReactDOM from 'react-dom';

//           // practice 1 Context_API
// import App from './Context_API/App';
// ReactDOM.render(<App />, document.getElementById("root"));

//           // practice 2 useEffect hooks
// import App from './useEffect/App';
// import  './useEffect/App.css';
// ReactDOM.render(<App />, document.getElementById("root"));

//           // practice 3 Axios API
// import App from './Axios_API/App';
// ReactDOM.render(<App />, document.getElementById("root"));

          // practice 4 React Routing
import App from './Routing/App';
import {BrowserRouter} from "react-router-dom";
import './Routing/index.css';
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById("root"));

