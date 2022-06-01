import React from 'react'

function IndividualLetter({xPosition, yPosition, board, currentWord, wordAnswer}) {
    const letter = board[yPosition][xPosition]

    
    const correctLetter = wordAnswer[xPosition] === letter
    const almostRightLetter = !correctLetter && letter !== "" && wordAnswer.includes(letter)
    const letterBoxColor = currentWord.currentAttempt > yPosition && 
    (correctLetter ? "correct" : almostRightLetter ?  "almost" : "error")
  return (
    <div className='letter' id={letterBoxColor.toString()} >{letter}</div>
  )
}

export default IndividualLetter