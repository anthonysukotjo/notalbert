import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from "./components/AppBar";
import Course from './components/Course';
import data from './components/sampledata.json';
import  Schools from './components/Schools';

function App() {
  return (

    <div className="App">
        <HeaderBar/>
        <div className='pageBody'>
            <Schools/>
            <Course data = {data}/>
        </div>

    </div>
  );
}

export default App;
