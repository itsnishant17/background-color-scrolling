import logo from './logo.svg';
import './App.css';
import React from "react";
import {data} from "./data";

function App() {
  return (
  <div>
    {data.map((group,i)=>(
      <div>
        <h1>{group.title}</h1>
      </div>
    ))}
  </div>
  );
}

export default App;
