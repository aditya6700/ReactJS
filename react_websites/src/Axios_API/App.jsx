import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function App() {
    const [num, setNum] = useState();
    const [show, setShow] = useState(false);

    const [data, setData] = useState({
        name : "",
        height : "",
        weight : "",
        moves : " ",
    })

    useEffect(() => {
        // console.log("woking");
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            // console.log(res.data.name, res.data.height, res.data.moves.length, res.data.weight);
            setData(() => {
                return{
                    name : res.data.name,
                    height : res.data.height,
                    weight : res.data.weight,
                    moves : res.data.moves.length,
                };
            });
        };
        getData();
    });

    return(
        <>
            <select 
            value={num}
            onChange={(e) => {
                setNum(e.target.value);
                setShow(true);
            }} 
            style={{ height: "40px",width:"100px", fontSize:"larger", borderRadius:"5px"}}
            >
                <option value='1'> 1 </option>
                <option value='5'> 5 </option>
                <option value='12'> 12 </option>
                <option value='25'> 25 </option>
                <option value='18'> 18 </option>
            </select> 

            {show ? <><h1> Id {num} belongs to <span style={{color:"green"}}>  {data.name} </span> </h1> 
            <ol style={{ fontSize: "larger"}}> 
                <li> height is {data.height} </li>
                <li> weight is {data.weight} </li>
                <li> moves are {data.moves} </li>
            </ol> </> : null }
        </>
    );
    
};
