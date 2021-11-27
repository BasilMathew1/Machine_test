import React from "react";

import { useState, useEffect } from "react";
import axios from "axios"; 
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import {Table,Button} from 'react-bootstrap';


//To display travel details
function TravelDetails(){
    //initialze the use case to empty
    const[travel,setTravel] = useState([]);
    const {id} =useParams()
    const navigate =useNavigate();

    useEffect(() =>{
        console.log('The use effect hook has been executed');
        
        axios
        .get(`http://localhost:4000/travelRequest/${id}`)
        .then(response => {
            console.log('promise fulfilled')
            console.log(response)
            setTravel(response.data)
        })
    })

    return (<>
        <h2 style={{marginTop:50}}><b>Travel Details</b></h2>
        <div style={{
            marinTop :40,
            width: 700,
            marginLeft: '25%'
        }}>

        
        <Table striped bordered hover variant ='dark'>
            <tbody>
                <tr>
                    <td>cause_travel : </td>
                    <td>{travel.cause_travel}</td>
                </tr>
                <tr>
                    <td>source : </td>
                    <td>{travel.source}</td>
                </tr>
                <tr>
                    <td>destination  : </td>
                    <td>{travel.destination}</td>
                </tr>
                <tr>
                    <td>mode  : </td>
                    <td>{travel.mode}</td>
                </tr>
                <tr>
                    <td>from_date: </td>
                    <td>{travel.from_date}</td>
                </tr>
                <tr>
                    <td>to_date  : </td>
                    <td>{travel.to_date}</td>
                </tr>
                <tr>
                    <td>no_days : </td>
                    <td>{travel.no_days}</td>
                </tr>
                <tr>
                    <td>priority : </td>
                    <td>{travel.priority}</td>
                </tr>
                <tr>
                    <td>project_id : </td>
                    <td>{travel.project_id}</td>
                </tr>
                <tr>
                    <td>emp_id : </td>
                    <td>{travel.emp_id}</td>
                </tr>
                <tr>
                    <td>status : </td>
                    <td>{travel.status}</td>
                </tr>

                </tbody>
       <tr>
        <td>
        <Button type="button" onClick={()=>navigate(`/traveledit/${travel.request_id}`)}>Edit</Button>
        </td>
        <td>
        <Button type='button' variant='primary' onClick={() =>navigate(`/deletetravel/${travel.request_id}`)}>Delete</Button>
        </td>
        </tr>
        <tr>
            <a href= "/visitlibrary" style={{ marginLeft: '64%'},{align:'center'}}>Go to Book List</a> 
            
        </tr>
         
        </Table>       
        </div>
      </>);
  }

  export default TravelDetails;
