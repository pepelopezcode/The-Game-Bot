import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './loginComponents/Signup';
import Login from './loginComponents/Login'

import Home from './Home';

function App() {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [signupSwitch, setSignupSwitch] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("Token")
    if (token) {
      fetch("http://localhost:3000/me", {
        method: "GET",
        headers: { Authorization: "Bearer " + token}
      })
        .then(response => response.json())
        .then(data => setUser(data))
      setLoggedIn(true)
    }

  }, []);

  

  return (
    <div className="App">
      <header className="App-header">
        {loggedIn ? <Home setLoggedIn={setLoggedIn} /> :(signupSwitch ? <Signup setSignupSwitch={setSignupSwitch} /> :<Login setLoggedIn={setLoggedIn} setSignupSwitch={setSignupSwitch}/> )   }
        
        
      </header>
    </div>
  );
}

export default App;
