import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux/es/exports';
import {auth} from '../firebase'
import { updateLoginStatus } from '../app/reducers/reducer';

export default function Login() {
    const [state,setState] = useState({password:'',email:''});
    const {email,password} = state;
    const dispatch = useDispatch();
    // const data = useSelector(state=>state.cake.data);
    // console.log(data);
    const navigate = useNavigate();
    const onChangeHandler = (e)=>{
        let name = e.target.name;
        setState({...state,[name]:e.target.value})
    }
      const navigateToSignUp = ()=>{
        navigate('/signup')
      }
      const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!email || !password){
          alert('fields are empty');
        }
        // return;
        try{
          const result = await signInWithEmailAndPassword(auth,email,password)
          alert(`Login Successful ${result.user.email}`)
          dispatch(updateLoginStatus(true))
          navigate('/home');
        }catch(error){
          alert(error.message)
        }
      }
  return (
    <Container className='mt-2'>
    <Row>
      <Col md={12}>
        <h1>Login</h1>
      </Col>
        <Col md={6}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={onChangeHandler} type="email" placeholder="Enter Email" name='email'/>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={onChangeHandler} type="password" placeholder="Enter password" name='password'/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Group className='mt-3'>
          <Form.Text className="text-dark fw-bold">
              Don't have an Account ? Create one by Signing up....
          </Form.Text>
          <Form.Control onClick={navigateToSignUp} className='btn btn-dark mt-2' type='button' value='SignUp'/>
        </Form.Group>
        </Form>
        </Col>
    </Row>
</Container>
  )
}
