import React from 'react';
import './App.css';
import HeaderBar from "./components/AppBar";
import Subjects from "./components/Subjects";
import Courses from "./components/Courses";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import TimeTable from "./components/TimeTable";
import SearchPage from "./components/TempSearchPage";

function App() {

    console.log()
  return (
    <div className="App">
        <BrowserRouter>
        <HeaderBar/>

        <div className='pageBody'>

                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path='/home' component = {Home}/>
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
                    <Route exact path="/timetable" component = {TimeTable}/>
                    <Route exact path="/aboutus" component = {AboutUs}/>
                    <Route exact path="/search" component = {SearchPage}/>

                </Switch>

        </div>
        </BrowserRouter>
    </div>

  );
}

export default App;