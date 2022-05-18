import React, {useState, useEffect} from 'react';
import './App.css';
import Signup from './loginComponents/Signup';
import Login from './loginComponents/Login'
import Logout from './loginComponents/Logout';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3000/me")
    .then((resp) => {
      console.log(resp)
      if (resp.ok) {
        resp.json()
        .then((user) => setUser(user));
      }
    });
  }, []);

  console.log(user)

  return (
    <div className="App">
      <header className="App-header">
        <Signup />
        <Login />
        <Logout />
      </header>
    </div>
  );
}

export default App;
