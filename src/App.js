
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { type } from '@testing-library/user-event/dist/type';
import About from './components/About';

import {                           //For importing router//
  BrowserRouter as Router,
  Routes,
  Route,
   
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);  //Whether dark mode is enable or not


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);  //Set time for alert box
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "Success");
    }
  }
  return (
    <>
      <Router>

        <Navbar title="TechStar#" aboutText="About TechStar*" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar title="TechStar#"  mode={mode} /> */}
        <Alert alert={alert} />


        <div className="container my-2">
          <Routes>
            <Route exact path='/about'
              element={<About  mode={mode}/>}
            />
 
            <Route exact path='/'    //This Was new method to write the Routes incase of Switch// 
              element={<TextForm showAlert={showAlert} heading="Try TechStar# - Word Counter, Character Counter " mode={mode} />}
            />
          </Routes>
        </div>
      </Router>


    </>
  );
}

export default App;
