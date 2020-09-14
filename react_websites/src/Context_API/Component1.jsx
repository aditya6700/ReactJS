import React, { useContext } from 'react';
import Component2 from './Component2';
import {Data} from './App';


const Component1 = () => { 
    const { fname1, lname1} = useContext(Data);
    return(
        <>
            {/* <Component2 /> */}
            <h1> <strong> {fname1} {lname1} </strong></h1>
        </>
    );
};

export default Component1;

 