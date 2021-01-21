import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from "./components/AppBar";
import Course from './components/Course';
import data from './components/sampledata.json';
import  Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <Home/>
        <Course data = {data}/>

    </div>
  );
}

export default App;
