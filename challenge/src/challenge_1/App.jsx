import React from 'react'

function App(){
    let mydate = new Date();
    mydate = mydate.getHours();
    let greet = "";

    let cstyle = {
        color:"blue"
    }
    var d = new Date().toLocaleDateString();
    var t = new Date().toLocaleTimeString();
    if(mydate>=1 && mydate <=11){
        greet = "Good Morning";
        cstyle.color="blue";
    }else if(mydate>=12 && mydate<19){
        greet = "Good Afternoon";
        cstyle.color="yellow";
    }else{
        greet = "Good Night"
        cstyle.color="rgb(248, 18, 106)";
    }

    return(
        <>
        <div>
        <h1>Hello Sir! <span style={cstyle}> {greet} </span></h1>
            <h2> {d} {t}</h2>
        </div>
        </>
    );
}

export default App;