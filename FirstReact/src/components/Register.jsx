import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRegisterMutation } from '../Slices/apiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [name , setName] = useState('')
  const [last , setLast] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('');

  const [register,{error}] = useRegisterMutation();
  const navigate = useNavigate();
  const handlesubmit=async(e)=>{
  e.preventDefault()
    await register({name,last,email,password});
   if(!error){
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });
    navigate('/')
   }
  }
  return (
    <div>
       <Form onSubmit={(e)=>handlesubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLast">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" onChange={(e)=>{setLast(e.target.value)}}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>   
        <ToastContainer /> 
    </div>
  )
}

export default Register
