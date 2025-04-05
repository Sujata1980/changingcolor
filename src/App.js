import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {

  const [text,setText] = useState(false);

 const handleClick = () =>{
    setText(!text)
    }
  

  
  return (
    <div className="App">

      <h1>Changes Color</h1>
      <h1 style = {{ color : text ? "red" : ""}}>SUJATA AGARWAL</h1>
      <button onClick={handleClick}>ChangeColor</button>
      
    </div>
  );
}

export default App;
