import React, { useEffect } from 'react'

function IndividualLetter({xPosition, yPosition, board, currentWord, wordAnswer, disabledLetters, setDisabledLetters}) {
    const letter = board[yPosition][xPosition]

    
    const correctLetter = wordAnswer[xPosition] === letter
    const almostRightLetter = !correctLetter && letter !== "" && wordAnswer.includes(letter)
    const letterBoxColor = currentWord.currentAttempt > yPosition && 
    (correctLetter ? "correct" : almostRightLetter ?  "almost" : "error")
    useEffect(() => {
      if (letter !== "" && !correctLetter && !almostRightLetter){
        setDisabledLetters((prev) => [...prev, letter])
      }
    },[currentWord.currentAttempt])
  return (
    <div className='letter' id={letterBoxColor.toString()} >{letter}</div>
  )
}

export default IndividualLetter