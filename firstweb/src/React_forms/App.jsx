import React, { useState } from 'react';

const App= () =>  {
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");

    const [Fname, setFname] = useState("");
    const [lname, setLname] = useState("");
  
    const changeName = (event) => {
        event.preventDefault();  // to prevent the defaulth action of form i.e refreshing page
        setFname(name);
        setLname(name2);
    };

    const inputEvent1 = (event) => {
        setName(event.target.value);
        // console.log(event.target.value);
    };

    const inputEvent2 = (event) => {
        setName2(event.target.value);
    };

   
    return(
        <>
        <div className="main">
            <form onSubmit={changeName}>
                <div className="mainform">
                    <h1>Hola {Fname} {lname} </h1>
                    <input type="text" placeholder="first name here" onChange={inputEvent1} value={name} />
                    <input type="text" placeholder="last name here" onChange={inputEvent2} value={name2} />

                    <button type="submit"> click me </button>
                </div>
            </form>
        </div>    
        </>
    );
};
 
export default App;