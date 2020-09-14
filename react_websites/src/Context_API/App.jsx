import React, { createContext } from 'react';
import Component1 from './Component1';

// creating context
const Fname = createContext();  
const Lname = createContext();

const Data = createContext(); 

const contextData = {
    fname1: "sai aditya devulpalli",
    lname1: "aditya sai",
}
const App = () => { 
    return(
        <>
            {/* this is Provider so we use context1.provider and the value is passed 
            and when there is second context provied it it first context1.provider
            and finally the component you want to render */}

        <Fname.Provider value={"sai aditya"}>   
            <Lname.Provider value={"devulapalli"}>
                <Data.Provider value={contextData}>
                     <Component1 />
                </Data.Provider>
            </Lname.Provider>
        </Fname.Provider>
            
        </>
    );
};

export default App;
export {Fname, Lname, Data};   // exporting context 
// if you're exporting using flower brackets also you must import them using flower brackets

 