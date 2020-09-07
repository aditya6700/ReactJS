import React from 'react';
import * as op from './Calc';

const cstyle = {
    padding:"4rem",
    justifyContent:"center",
    fontSize:"xx-large"
};

function Cal(){
    return (
    <>
        <div style={cstyle}>
            <ul>
                <li> Addition of 10 and 3 is {op.add(10,3)} </li>
                <li> Subraction of 10 and 3 is {op.sub(10,3)} </li>
                <li> Multiplication of 10 and 3 is {op.mul(10,3)} </li>
                <li> Division of 10 and 3 is {op.divi(10,3)} </li>
            </ul>
        </div>
    </>
    );
}

export default Cal;