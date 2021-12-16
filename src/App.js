import React, {useState, useReducer} from 'react';
import ReducerHook from './Component/ReducerHook'
import './App.css';
const App = () => {
  ////////////////console.log('state'+ state)
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState("Rahul");

// //events
// const IncNum = () => {
//     setCount(count+1);
// }

// const DecNum = () => {
//   setCount(count-1);
// }

// const NameOnClick = () => {
  
//   switch(name){
//     case "Rahul":
//     setName("Desai");
//     break;
//     case  "Desai":
//       setName("Rahul")
//   }


// }
  return (
   <div className="App">
    {/* <button onClick={IncNum}>+</button>
     <h1>{count}</h1>
    <button onClick={DecNum}>-</button>
    <h1>{name}</h1>
    <button onClick={NameOnClick}>Click me!</button> */}
    <ReducerHook/>
   </div>
  );
}
 
export default App;
