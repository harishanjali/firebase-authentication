import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase.js'
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [state,setState] = useState({password:'',cpassword:'',email:''});
    const {password,cpassword,email} = state;
    // const apiKey = process.env.REACT_APP_API_KEY
    const navigate = useNavigate();
    const onChangeHandler = (e)=>{
        let name = e.target.name;
        setState({...state,[name]:e.target.value})
    }
    const handleSubmit = async(e)=>{
      e.preventDefault();
      if(password!==cpassword){
        alert('Passwords do not match');
      }
      try{
        const result = await createUserWithEmailAndPassword(auth,email,password)
        navigate('/');
        // console.log(result);
      }catch(error){
        alert(error.message);
      }
    }
  return (
    <Container className='mt-3'>
        <Row>
        <Col md={12}>
        <h1>Sign Up</h1>
      </Col>
            <Col md={6}>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">  
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={onChangeHandler} id='email' type="email" placeholder="Enter email" name='email'/>
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={onChangeHandler} id='password' type="password" placeholder="Enter password" name='password' autoComplete='new-password'/>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control onChange={onChangeHandler} id='cpassword' type="password" placeholder="Confirm Password" name='cpassword'/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            </Col>
        </Row>
    </Container>
    
  );
}