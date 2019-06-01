import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Auth from './Components/Auth/Auth';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post';



function App() {
  return (
    <div>
     <Dashboard></Dashboard>
     <Form></Form> 
     <Auth></Auth>
     <Nav></Nav>
     <Post></Post>
    </div>
  );
}

export default App;
