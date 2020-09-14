import React, {useEffect, useState} from 'react';


// What does useEffect do? 
// By using this Hook, you tell React that your component needs to do something after render. 
// React will remember the function you passed (we’ll refer to it as our “effect”), 
// and call it later after performing the DOM updates. In this effect, we set the document title, 
// but we could also perform data fetching or call some other imperative API.

// Why is useEffect called inside a component? 
// Placing useEffect inside the component lets us access the count state variable 
// (or any props) right from the effect. We don’t need a special API to read it — 
// it’s already in the function scope. Hooks embrace JavaScript closures and avoid 
// introducing React-specific APIs where JavaScript already provides a solution.

// Does useEffect run after every render? 
// Yes! By default, it runs both after the first render and after every update. 
// (We will later talk about how to customize this.) Instead of thinking in terms of 
// “mounting” and “updating”, you might find it easier to think that effects happen 
// “after render”. React guarantees the DOM has been updated by the time it runs the effects

export default function App() {
    const [num, setnum] = useState(0);
    const [num1, setnum1] = useState(0);
    //  useEffect always expects a function and if you want to use this hook only for a 
    //  particular element then specify it in an array
    //  if you want it only for one time then specify an empty array
    useEffect(()=> {
        alert("you clicked");
    }, [num]);     // alert on click of button 1

    useEffect(()=> {
        document.title = `button 2 is clicked ${num1} times`;
    }, [num1]);     // changes the document title on click of button 2

    return(
        <>
            <button onClick={() => {
                setnum( num +1 );
            }}> click me {num} </button>
            <br/>
            <br/>
            <button onClick={() => {
                setnum1( num1 +1 );
            }}> click me {num1} </button>
        </>
    )
    
};
