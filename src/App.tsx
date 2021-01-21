import React from 'react';
import './App.css';
import HeaderBar from "./components/AppBar";
import  Schools from './components/Schools';
import Subjects from "./components/Subjects";
import Courses from "./components/Courses";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {

    console.log()
  return (
    <div className="App">
        <HeaderBar/>
        <div className='pageBody'>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path='/home' component = {Schools}/>
                    <Route path='/subject'
                           render={(props) =>(
                               <Subjects {...props}/>
                           )}
                    />
                    <Route path='/course'
                           render={(props) =>(
                               <Courses {...props}  term={'sp'} year={'2021'}/>
                           )}
                    />
                </Switch>
            </BrowserRouter>
        </div>

    </div>
  );
}

export default App;