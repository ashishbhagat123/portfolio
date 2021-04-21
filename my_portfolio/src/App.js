import React, { useState } from 'react';
import './App.css';
import { LandingPage } from './Components/LandingPage';
import { Navbar } from './Components/Navbar';

function App() {
  const [mode, setMode] = useState("dark");
  
  const handleClick = () => {
    setMode(mode === "dark"? "light": "dark" )
  }

  return (
    <>
    <div className="App" style = {mode === "dark"? {background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", color: "white"}: {background: "white", color: "black"}}>
      <Navbar mode = {mode} handleClick = {handleClick} />
      <LandingPage mode = {mode} handleClick = {handleClick}/>
    </div>
    </>
  );
}

export default App;
