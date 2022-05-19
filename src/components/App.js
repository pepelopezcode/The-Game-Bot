import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './loginComponents/Signup';
import Login from './loginComponents/Login'
import Logout from './loginComponents/Logout';

function App() {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem("Token")
    console.log(token)
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
        {loggedIn ? <Logout setLoggedIn={setLoggedIn} /> : <Login setLoggedIn={setLoggedIn} />}
        
        
      </header>
    </div>
  );
}

export default App;
