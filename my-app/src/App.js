//import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';

import Navbar from './components/Navbar';
import Login from './components/Login'

import AddTravel from './components/Registration/TravelRegistration';
import AddEmployee from './components/Registration/EmployeeRegistration';
import TravelDetails from './components/Details/TravelDetails';
import EmployeeDetails from './components/Details/EmployeeDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      <Routes>  
         <Route path ='/' element ={<Home/>}/> 
        <Route path ='/about' element ={<About/>}/>
        
         <Route path ='/employeedetails/:id' element ={<EmployeeDetails/>}/>
         <Route path ='/traveldetails/:id' element ={<TravelDetails/>}/>
       
        <Route path ='/travelregistration' element ={<AddTravel/>}/>
        <Route path ='/employee' element ={<AddEmployee/>}/>
        <Route path ='/login' element ={<Login/>}/>
      </Routes>  

      <br/><br/><br/><hr/>
      <h6>CopyRight - All Rights Reserved</h6>
      </Router>

      
    </div>
  );
}

export default App;