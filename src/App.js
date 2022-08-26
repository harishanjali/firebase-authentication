import logo from './logo.svg';
import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/header/Header';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase';
import { useDispatch } from 'react-redux/es/exports';
import {updateLoginStatus} from './app/reducers/reducer';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const token = (localStorage.getItem('token'));
    if(token!==null){
      dispatch(updateLoginStatus(true))
    }
    else{
      dispatch(updateLoginStatus(false))
    }
  },[])
  return (
   <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
   </Router>
  );
}

export default App;
