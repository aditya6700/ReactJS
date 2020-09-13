import React, { useContext } from 'react';
import {Lname, Fname} from './App'; 
import Component3 from './Component3';

//  getting the values using useContext method

const Component2 = () => { 
    const lname = useContext(Lname);
    const fname = useContext(Fname);

    return(
        <>
            {/* <Component3 /> */}
            <h1>my name is {fname} {lname} </h1>
        </>
    );
};

export default Component2;