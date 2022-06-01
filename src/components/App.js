import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './loginComponents/Signup';
import Login from './loginComponents/Login'

import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import WordlePage from './wordle/WordlePage';
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [signupSwitch, setSignupSwitch] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("Token")
    if (token) {
      fetch("http://localhost:3000/me", {
        method: "GET",
        headers: { Authorization: "Bearer " + token }
      })
        .then(response => response.json())
        .then(data => setUser(data))
      navigate("/")
    }else {
      navigate("/login")
    }

  }, []);



  return (
    <div className="App">
      
      <Routes >
        <Route exact path="/" element={<Home />}/>
          
        <Route exact path="/login" element={<Login  /> } />
          
        <Route exact path="/wordle" element={<WordlePage user={user} />} />

        <Route exact path="/signup" element={<Signup  />} />
          
        
      </Routes>



    </div>
  );
}

export default App;
