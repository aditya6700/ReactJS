import React, { useState } from  'react';

const App = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    };

    const decNum = () => {
        if(num>0){
            setNum(num - 1);
        }else{
            setNum(0);
            alert(" number can't be decremented further ");
        }
    };

    return(
        <>
        <div className="main_div">
            <div className="list_div">
                <h1> {num} </h1>
                <div className="button_div">
                    <button onClick={incNum}> INC</button>
                    <button onClick={decNum}> DEC </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default App;