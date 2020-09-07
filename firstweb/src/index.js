import React from 'react';
import ReactDOM from 'react-dom';

//               //practice 1

// import './practice_1/index1.css'   // importing css file
// import mydata from './practice_1/mydata.json'  // importing json data file
//  // getting time and date
// var d = new Date().toLocaleDateString();
// var t = new Date().toLocaleTimeString();

//  //  creating styles using JS

// const h1={
//   textAlign: 'cente',
//     padding: '3rem',
//     color: 'blueviolet',
// }

// const imag = "https://picsum.photos/300/300";

// ReactDOM.render(
//   <> 
//     <h1 style={h1}> hello world</h1> 
//     <p> fifteen six is {15 *6}</p>
//     <h2> Time is {t} and date is {d} </h2>
//     <br></br>
//     { mydata.map((key,index) =>{
//       return <div>
//         <h3> Temp1 : {key.Temp1} Hum1 : {key.Hum1} __
//         Temp2 : {key.Temp2} Hum2 : {key.Hum2}</h3>
//       </div>
//     }
//     )}
//     <br></br>
//     <img src={imag} alt="randomimage"></img>
//   </>,
//   document.getElementById('root')
// );


          // practice 2 App components
import App from './practice_2/App';
ReactDOM.render(<App />, document.getElementById("root"));


