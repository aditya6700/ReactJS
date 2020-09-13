import React, { createContext } from 'react';
import Component1 from './Component1';

// creating context
const Fname = createContext();  
const Lname = createContext();

const App = () => { 
    return(
        <>
            {/* this is Provider so we use context1.provider and the value is passed 
            and when there is second context provied it it first context1.provider
            and finally the component you want to render */}

        <Fname.Provider value={"sai aditya"}>   
            <Lname.Provider value={"devulapalli"}>
                <Component1 />
            </Lname.Provider>
        </Fname.Provider>
            
        </>
    );
};

export default App;
export {Fname, Lname};   // exporting context 
// if you're exporting using flower brackets also you must import them using flower brackets

 