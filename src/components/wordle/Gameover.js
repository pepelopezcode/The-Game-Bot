import React from 'react'
import { useNavigate } from 'react-router-dom'


function Gameover({score, setScore}) {
  const navigate = useNavigate()

  function reset() {
    navigate("/wordle")
    setScore(0)
  }

  function home(){
    navigate("/")
    setScore(0)
  }

  return (
    <div className='gameoverPage'>
      <h1  >Gameover</h1>
      <h3 >Final Score: {score}</h3>
      <button onClick={() => reset()}  id='gameoverbutton' >Try Again</button><button  onClick={() => home() } id='gameoverbutton'>Home</button>
    </div>
  )
}

export default Gameover