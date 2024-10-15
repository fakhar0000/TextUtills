import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import Textform from "./components/Textform";
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App(){
  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  } 

  const toggleMode = () => {
    if(mode === 'white'){
      setMode('black');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      //document.title = "TextUtills-Darkmode";
      // For making a error message in your website but it have bad impression on your user
      // setInterval(() => {
      //   document.title = "TextUtills is amazing";
      // },2000);
      // setInterval(() => {
      //   document.title = "Install TextUtills now";
      // },1500);
    }
    else{
      setMode('white');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      //document.title = "TextUtills-Lightmode";
    }

  } 
  return (
    <>
    <Router>
      <Navbar title="TextUtills" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/About" element={<About mode={mode}/>}/>
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="TextUtills-Word counter,Character counter,Remove extraspaces" mode={mode}/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
