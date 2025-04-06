import logo from './logo.svg';
import React,{useState} from 'react';
import image from './assests/name.jpg'
import './App.css';

function App() {

  const [color,changeColor] = useState("darkorange");

  
 
  

  
  return (
    <div className="App">

      <h1>Changes Color</h1>
      {/* <h1 style = {{ color : text ? "red" : " "}}>SUJATA AGARWAL</h1> */}
      <img src={image} alt = "name" height ={200}/> 
      <h1 style = {{color}}>SUJATA AGARWAL</h1>
      
      
      <button onClick={()=>changeColor("red")} 
      style = {{background:"red" , color:"white",
               borderRadius:"5px",margin:"10px",
               padding:"5px", fontSize:"20px"}}>
      RedColor</button>
      <button onClick={()=>changeColor("blue")} 
      style = {{background:"blue" , color:"white",
              borderRadius:"5px",margin:"10px",
              padding:"5px",fontSize:"20px"}}>
      BlueColor</button>
      <button onClick={()=>changeColor("darkgreen")} 
      style = {{background:"green" , color:"white",
      borderRadius:"5px",margin:"10px",
      padding:"5px",fontSize:"20px"}}>
      GreenColor</button>
      
    </div>
  );
}

export default App;
