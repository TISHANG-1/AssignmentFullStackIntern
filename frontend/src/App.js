import './App.css';  
import { BrowserRouter as Router }  from 'react-router-dom';   
import store from './store.js';
import {Route , Routes} from "react-router-dom" ; 
import React from 'react';   
import { useSelector } from 'react-redux';   
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import User from './component/User.js';
import CreateUser from './component/CreateUser.js';
import UpdateUser from './component/UpdateUser.js';


function App() {  
 
  return (   
    <Router>   
        
     
     <Routes>   
     <Route path = "/"  Component={User}/>  
     <Route path = "/create-user"  Component={CreateUser}/>  
     <Route path = "/update-user"  Component={UpdateUser}/>  
    
    </Routes>  
  
    </Router>  
    

  );
}

export default App;
