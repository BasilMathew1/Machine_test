import React from "react"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {Table,Nav,Button} from 'react-bootstrap'

//Delete can also be done just by declaring and adding a delete function to a button

function Book(props){

    const navigate = useNavigate()
    console.log(props)
    return(
        <div>
        <div style={{
            marinTop :40,
            width: 700,
            marginLeft: '20%'
        }}>
        <Table striped bordered hover variant ='black'>    
       <tr>
            <td>
                <Nav.Link variant='pills' href={`/employeedetails/${props.details.id}`}><h4 style={{marginTop:'40px'},{color:'#201b1a'}}>{props.details.BookName}</h4></Nav.Link>
            </td> 
            <td>
                <Button type='button' variant='primary' onClick={() =>navigate(`/employeeedit/${props.details.id}`) } style={{color:'#2f1f1c'}}>Edit</Button>
            </td>
            <td>
                <Button type='button' variant='primary' onClick={() =>navigate(`/deleteemployee/${props.details.id}`)} style={{color:'#2f1f1c'}}>Delete</Button>
            </td>
        </tr>       
        
        </Table>
        </div>
        </div>)
}


export default Book;