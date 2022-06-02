import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './loginComponents/Signup';
import Login from './loginComponents/Login'
import Gameover from './wordle/Gameover';

import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import WordlePage from './wordle/WordlePage';
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [newLogin, setNewLogin] = useState(false)
  const [scoreData, setScoreData] = useState([])
  const [score, setScore] = useState(0)
  const [newScore, setNewScore] = useState(false)

  const [globalScoreData, setGlobalScoreData] = useState([])
    const [individualScoreData, setIndividualScoreData] = useState([])

    useEffect(() => {
        if ( (scoreData !== []) && user !== null) {
            setIndividualScoreData(scoreData.filter(score => score.user.username === user.username))
            setGlobalScoreData(scoreData.slice(0, 5))
        }
    }, [ scoreData])
  

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
      // localStorage.setItem('wordle', JSON.stringify({}))
    }else {
      navigate("/login")
    }

  }, [newLogin]);


  useEffect(() => {
    fetch("http://localhost:3000/scores")
        .then(response => response.json())
        .then(data => setScoreData(data))
      }, [user])

      useEffect(() => {
        if (user !== null){
          fetch("http://localhost:3000/scores")
            .then(response => response.json())
            .then(data => setScoreData(data))
        }
        
          }, [newScore])



  return (
    <div className="App">
      
      <Routes >
        <Route exact path="/" element={<Home user={user} scoreData={scoreData} globalScoreData={globalScoreData} individualScoreData={individualScoreData} />}/>
          
        <Route exact path="/login" element={<Login setNewLogin={setNewLogin} newLogin={newLogin}  /> } />
          
        <Route exact path="/wordle" element={<WordlePage user={user} score={score} setScore={setScore} setNewScore={setNewScore} />} />

        <Route exact path="/signup" element={<Signup setNewLogin={setNewLogin} newLogin={newLogin} />} />
        
        <Route exact path="/gameover" element={<Gameover score={score} setScore={setScore} />} />
        
      </Routes>



    </div>
  );
}

export default App;
