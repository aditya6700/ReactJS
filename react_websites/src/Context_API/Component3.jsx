import React from 'react';
import {Lname, Fname} from './App'; 

// this is a Consumer as provider we create a component using contextname.Consumer
// this always expects a function to be returned and if you have second context use it in 
// first context.Consumer 

const Component3 = () => { 
  
    return(
        <>
            <Fname.Consumer>
               {(Fname) => {
                   return(
                       <Lname.Consumer>
                           {(Lname) => {
                               return(
                                    <h1> Hello {Fname} {Lname} </h1>
                               )
                           }}
                       </Lname.Consumer>
                   )
               }} 
            </Fname.Consumer>
            
        </>
    );
};

export default Component3;


