import axios from 'axios'
import React,{useState} from 'react'

import {Form,Button} from 'react-bootstrap'


function AddTravel() {
    const [travel,setTravel] = useState({})
    const [submitted,setSubmitted] = useState(false)
    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setTravel(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        console.log(travel)
        event.preventDefault()
        setSubmitted(true)

            axios   
                .post('http://localhost:4000/travelRequest',travel)
                .then(response => {
                    console.log(response)
                    alert(`Travel details added successfully`)
                })
                .catch(error => {
                    console.log(error)
                })
    }

    const handleReset = () => {
        console.clear()
        setSubmitted(false)
    }
    
    return (
        <div>
            <h2 style={{marginTop:10},{marginLeft:50},{fontSize:50}}><b>Travel Registration</b></h2>
            <div style={{ 
                    display: 'block', 
                    width: 700, 
                    padding: 30 ,
                    marginLeft : '26%',
                    marginTop : 40,
                    backgroundColor : 'rgb(49,45,45)'
                  }} > 
                  
                <Form onSubmit={handleSubmit}>
                    
                    <Form.Group className='mb-3' controlId='formcause_travel'>
                        <Form.Control
                        className='Form-Control'
                        id= 'cause_travel'
                        type= 'text'
                        placeholder='Enter Cause of Travel'
                        name = 'cause_travel'
                        value = {travel.cause_travel}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formsource'>
                        <Form.Control
                        className='Form-Control'
                        id='source'
                        type='text'
                        placeholder='Enter source of travel'
                        name = 'source'
                        value = {travel.source}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formdestination'>
                        <Form.Control
                        className='Form-Control'
                        id='destination'
                        type='text'
                        placeholder='Enter your Destination'
                        name = 'destination'
                        value = {travel.destination}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formmode'>
                        <Form.Control
                        className='Form-Control'
                        id='mode'
                        type='text'
                        placeholder='Enter your Mode of Travel'
                        name = 'mode'
                        value = {travel.mode}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>


                    <Form.Group className='mb-3' controlId='formfrom_date'>
                        <Form.Control
                        className='Form-Control'
                        id='from_date'
                        type='date'
                        placeholder='Enter the from date'
                        name = 'from_date'
                        value = {travel.from_date}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>


                    <Form.Group className='mb-3' controlId='to_date'>
                        <Form.Control
                        className='Form-Control'
                        id='to_date'
                        type='date'
                        placeholder='Enter the to date'
                        name = 'to_date'
                        value = {travel.to_date}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    

                    <Form.Group className='mb-3' controlId='formno_days'>
                        <Form.Control
                        className='Form-Control'
                        id='no_days'
                        type='number'
                        placeholder='Enter the number of Days'
                        name = 'no_days'
                        value = {travel.no_days}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formpriority'>
                        <Form.Control
                        className='Form-Control'
                        id='priority'
                        type='text'
                        placeholder='Enter the priority'
                        name = 'priority'
                        value = {travel.priority}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formproject_id'>
                        <Form.Control
                        className='Form-Control'
                        id='project_id'
                        type='text'
                        placeholder='Enter the project Id'
                        name = 'project_id'
                        value = {travel.priority}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formemp_id'>
                        <Form.Control
                        className='Form-Control'
                        id='emp_id'
                        type='text'
                        placeholder='Enter the Employee Id'
                        name = 'emp_id'
                        value = {travel.emp_id}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formstatus'>
                        <Form.Control
                        className='Form-Control'
                        id='status'
                        type='text'
                        placeholder='Enter the Status '
                        name = 'status'
                        value = {travel.status}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>


                <Button type='submit' variant='primary' style={{backgroundColor:'rgb(215,131,117)',border:'none',color:'black'}}>Edit</Button>
                <Button type='reset' variant='primary' style={{backgroundColor:'rgb(215,131,117)',border:'none',color:'black',marginLeft:20}} onClick={handleReset} >Cancel</Button>
                </Form>
            </div>        
        </div>
    )
}


export default AddTravel