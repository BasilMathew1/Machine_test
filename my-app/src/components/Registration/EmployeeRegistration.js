import axios from 'axios'
import React,{useState} from 'react'

import {Form,Button} from 'react-bootstrap'

//AddEmployee function is added for Employee Registration 
function AddEmployee() {
    const [employee,setEmployee] = useState({})
    const [submitted,setSubmitted] = useState(false)
    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setEmployee(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        console.log(employee)
        event.preventDefault()
        setSubmitted(true)

            axios   
                .post('http://localhost:4000/employee',employee)
                .then(response => {
                    console.log(response)
                    alert(`${employee.First_Name} added successfully`)
                })
                .catch(error => {
                    console.log(error)
                })
    }
  
    //To clear the console and reset the registration form
    const handleReset = () => {
        console.clear()
        setSubmitted(false)
    }
    
    return (
        <div>
            <h2 style={{marginTop:10},{marginLeft:50},{fontSize:50}}><b>Employee Registration</b></h2>
            <div style={{ 
                    display: 'block', 
                    width: 700, 
                    padding: 30 ,
                    marginLeft : '26%',
                    marginTop : 40,
                    backgroundColor : 'rgb(49,45,45)'
                  }} > 
                  
                <Form onSubmit={handleSubmit}>
                    
                    <Form.Group className='mb-3' controlId='formFirst_Name'>
                        <Form.Control
                        className='Form-Control'
                        id= 'First_Name'
                        type= 'text'
                        placeholder='Enter your First name'
                        name = 'First_Name'
                        value = {employee.First_Name}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formLast_Name'>
                        <Form.Control
                        className='Form-Control'
                        id='Last_Name'
                        type='text'
                        placeholder='Enter your last name'
                        name = 'Last_Name'
                        value = {employee.Last_Name}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formAge'>
                        <Form.Control
                        className='Form-Control'
                        id='Age'
                        type='number'
                        placeholder='Enter your Age'
                        name = 'Age'
                        value = {employee.Age}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formGender'>
                        <Form.Control
                        className='Form-Control'
                        id='Gender'
                        type='text'
                        placeholder='Enter your Gender'
                        name = 'Gender'
                        value = {employee.Gender}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>


                    <Form.Group className='mb-3' controlId='formfrom_date'>
                        <Form.Control
                        className='Form-Control'
                        id='Address'
                        type='text'
                        placeholder='Enter your Address'
                        name = 'Address'
                        value = {employee.Address}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>


                    <Form.Group className='mb-3' controlId='to_date'>
                        <Form.Control
                        className='Form-Control'
                        id='Phone_Number'
                        type='number'
                        placeholder='Enter your Phone Number'
                        name = 'Phone_Number'
                        value = {employee.Phone_Number}
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


export default AddEmployee