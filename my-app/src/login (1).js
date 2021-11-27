
import { useState} from "react";
import axios from "axios";


function Login(){
 localStorage.clear();  
    return(<>
    <h1>Please Login</h1>
    <MyForm/>
    </>);
    }
    function MyForm(props){
    var header={
        width:"20%",
        borderRadius:"8px",
        borderStyle:"none",
        backgroundColor:"FLORALWHITE",
    
        
    }

    var submit={
        backgroundColor:"dodgerblue",
        width:"10%",
    }
    var cancel={
        backgroundColor:"red",
        width:"10%",
        float:"left",
        marginRight:"5px",
    }
    

    var div={
        width:"100%",
        border:"4px solid #FAEBD7",
        padding:"20px",
        boxShadow: "5px 10px 8px #888888",
        fontWeight:"bold",
        color:"black",
      
      }
  const [inputs, setInputs] = useState({});

    


  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values =>({...values, [name]: value}))
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(inputs);

    axios
        .post('http://localhost:3002/login',inputs)
        .then(response=>{
           
            localStorage.setItem('mytoken',response.data.accessToken);
               
              window.location='/staffList'
              console.log("coorect")
        })
        .catch(error=>{
          localStorage.clear();
          if(error.response){
            alert(error.response.data);
          }
        })
      }


   
  return(<div style={div}>

     
    <form onSubmit = {handleSubmit}>
      
      
       <div>
      <label>Email: </label><br/>
      <input style={header}type="email" name="email"placeholder="enter your email" onChange={handleChange} value={inputs.email || ""}/>
      </div><br/>

      <div>
      <label>Password: </label><br/>
      <input style={header}type="password" name="password" placeholder="enter the password" onChange={handleChange} value={inputs.password || ""}/>
      </div><br/>

      
      <div>
      <input style={submit} type="submit" value="login"/>
      

      
      <input style={cancel}type="reset" value="Cancel"/>
      </div>

    </form> 
    </div>
  )
}
      
    
  
export default Login;





// import { useState,useEffect} from "react";
// import axios from "axios";
// import {useParams} from 'react-router-dom';

// function Staff(){
//     // var header={
//     //     width:"100%",
//     //     borderRadius:"5px",
//     //     borderStyle:"none",
//     //      backgroundColor:"FLORALWHITE",
        
//     // }
//     var header={
//       width:"20%",
//       borderRadius:"8px",
//       borderStyle:"none",
//        backgroundColor:"FLORALWHITE",
//     }
  
      
  

//     var submit={
//         backgroundColor:"dodgerblue",
//         width:"10%",
//         boxShadow: "5px 10px 8px #888888",
//     }
//     var div={
//       width:"50%",
//       height:"200px",
//       border:"2px solid #FAEBD7",
//       padding:"20px",
//       marginTop:"10px",
      
//       boxShadow: "5px 10px 8px #888888",
//       fontWeight:"bold",
//       color:"black",
//       marginLeft:"300px",
//     }

//     // var div={
//     //     width:"520px",
//     //     border:"4px solid #FAEBD7",
//     //     padding:"50px",
//     //     margin:"20px",
//     //     boxShadow: "5px 10px 8px #888888",
//     //     fontWeight:"bold",
//     //     // backgroundColor:"BEIGE",


    


//     //initialize to empty
//     const [inputs, setInputs] = useState({});
  
//     //handle the change of form elements
//     function handleChange(event){
//       //saving the name of element and its value
//       const name = event.target.name;
//       const value = event.target.value;
  
//       //updating the values into the state
//       setInputs(values =>({...values, [name]: value}))
//     }
  
//     function handleSubmit(event){
//       //to prevent the default submit behaviour
//       event.preventDefault();
//       //printitng 
//       console.log(inputs);

//       axios
//     .put(`http://localhost:3002/staffs/${props.id}`,inputs)
//     .then(response=>{
//       console.log('proise was fullfilled')
//       console.log(response)
//       setInputs(response.data)
//       alert("user details were updated")
//       window.location='/staffList';
//     })
  
//     }
  
//     return(<div style={div}>
       
//       <form onSubmit = {handleSubmit}>
//         <div>
//         <label>Enter your Email: </label><br/>
//         <input style={header} type="Email" name="Email" placeholder=" email id"onChange={handleChange} value={inputs.Email || ""}/>
//         </div><br/>
        
//         <div>
//         <label>Enter your Password: </label><br/>
//         <input style={header}type="password" name="Password" placeholder="enter password" onChange={handleChange} value={inputs.Password || ""}/>
//         </div><br/>
//         <div>
//         <input style={submit}type="submit" value="Login"/>
//         </div>
//       </form>
//       </div>

//     )
    
//   }
//   export default Staff;
