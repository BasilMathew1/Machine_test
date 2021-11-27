//import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from './Home';
import About from './components/About';
//import VisitLibrary from './Visit_Library.js';
import Navbar from './components/Navbar';
//import BookDetails from './BookDetails';
//import Deletebook from './deletebook';
//import BookEdit from './BookEdit';
//import AddBook from './addbook';
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
        {/* <Route path ='/visitlibrary' element ={<VisitLibrary/>}/> */}
         <Route path ='/employeedetails/:id' element ={<EmployeeDetails/>}/>
         <Route path ='/traveldetails/:id' element ={<TravelDetails/>}/>
        {/* <Route path ='/deletebook/:id' element ={<Deletebook/>}/> */}
        {/* <Route path ='/bookedit/:id' element={<BookEdit/>}/> */}
        {/* <Route path ='/addbook' element={<AddBook/>}/> */}
        <Route path ='/travelregistration' element ={<AddTravel/>}/>
        <Route path ='/employee' element ={<AddEmployee/>}/>
      </Routes>  

      <br/><br/><br/><hr/>
      <h6>CopyRight - All Rights Reserved</h6>
      </Router>

      
    </div>
  );
}

export default App;