import React from "react";

import { useState, useEffect } from "react";
import axios from "axios"; 
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {Table,Button} from 'react-bootstrap';



function EmployeeDetails(){
    //initialze the use case to empty
    const[employee,setEmployee] = useState([]);
    const {id} =useParams()
    const navigate =useNavigate();

    useEffect(() =>{
        console.log('The use effect hook has been executed');
        
        axios
        .get(`http://localhost:4000/employee/${id}`)
        .then(response => {
            console.log('promise fulfilled')
            console.log(response)
            setEmployee(response.data)
        })
    })

    return (<>
        <h2 style={{marginTop:50}}><b>Employee Details</b></h2>
        <div style={{
            marinTop :40,
            width: 700,
            marginLeft: '25%'
        }}>


        <Table striped bordered hover variant ='dark'>
            <tbody>
                <tr>
                    <td>First_Name : </td>
                    <td>{employee.First_Name}</td>
                </tr>
                <tr>
                    <td>Last_Name : </td>
                    <td>{employee.Last_Name}</td>
                </tr>
                <tr>
                    <td>Age : </td>
                    <td>{employee.Age}</td>
                </tr>
                <tr>
                    <td>Gender  : </td>
                    <td>{employee.Gender}</td>
                </tr>
                <tr>
                    <td>Address: </td>
                    <td>{employee.Address}</td>
                </tr>
                <tr>
                    <td>Phone_Number  : </td>
                    <td>{employee.Phone_Number}</td>
                </tr>
                <tr>
                    <td>l_id : </td>
                    <td>{employee.l_id}</td>
                </tr>
                </tbody>
       <tr>
        <td>
        <Button type="button" onClick={()=>navigate(`/employeeedit/${books.id}`)}>Edit</Button>
        </td>
        <td>
        <Button type='button' variant='primary' onClick={() =>navigate(`/deleteemployee/${books.id}`)}>Delete</Button>
        </td>
        </tr>
        {/* <tr>
            <a href= "/visitlibrary" style={{ marginLeft: '64%'},{align:'center'}}>Go to Book List</a> 
            
        </tr> */}
         
        </Table>       
        </div>
      </>);
  }

  export default EmployeeDetails;
