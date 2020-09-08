import React, { useState } from 'react';

const App= () =>  {
    const [Fullname, setName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
    });

    const changeName = (event) => {
        event.preventDefault();  // to prevent the defaulth action of form i.e refreshing page
        alert("form submited")
    };

    const inputEvent = (event) => {
        // const value = (event.target.value);  // storing the value attribute
        // const name = (event.target.name);  // storing the name attribute
        
        const { value, name} = event.target;  // object destructuring

        setName((pastValue) => {
            if(name === "fname"){
                return{
                    fname: value,
                    lname: pastValue.lname,
                    phone: pastValue.phone,
                    email: pastValue.email,
                };
            }else if(name === "lname"){
                return{
                    fname: pastValue.fname,
                    lname: value,
                    phone: pastValue.phone,
                    email: pastValue.email,
                };
            }else if(name === "email"){
                return{
                    fname: pastValue.fname,
                    lname: pastValue.lname,
                    phone: pastValue.phone,
                    email: value,
                };
            }else if(name === "phone"){
                return{
                    fname: pastValue.fname,
                    lname: pastValue.lname,
                    phone: value,
                    email: pastValue.email,
                };
            }
        });
    };

   
    return(
        <>
        <div className="main">
            <form onSubmit={changeName}>
                <div className="mainform">
                    <h1>Hola {Fullname.fname} {Fullname.lname} </h1>
                    <p> {Fullname.email} </p>
                    <p> {Fullname.phone} </p>
                    <input type="text" placeholder="first name here" onChange={inputEvent} name='fname' value={Fullname.fname} />
                    <input type="text" placeholder="last name here"  onChange={inputEvent} name='lname' value={Fullname.lname} />
                    <input type="text" placeholder="email here" onChange={inputEvent} name='email' value={Fullname.email} />
                    <input type="text" placeholder="phone number here" onChange={inputEvent} name='phone' value={Fullname.phone} />

                    <button type="submit"> Submit </button>
                </div>
            </form>
        </div>    
        </>
    );
};
 
export default App;