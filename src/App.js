import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {

  const [color,changeColor] = useState("darkorange");

  
 
  

  
  return (
    <div className="App">

      <h1>Changes Color</h1>
      {/* <h1 style = {{ color : text ? "red" : " "}}>SUJATA AGARWAL</h1> */}

      <h1 style = {{color}}>SUJATA AGARWAL</h1>
      
      
      <button onClick={()=>changeColor("red")} style = {{background:"red" , color:"white", borderRadius:"10px",margin:"10px"}}>RedColor</button>
      <button onClick={()=>changeColor("blue")} style = {{background:"blue" , color:"white"}}>BlueColor</button>
      <button onClick={()=>changeColor("darkgreen")} style = {{background:"green" , color:"white"}}>GreenColor</button>
      
    </div>
  );
}

export default App;
