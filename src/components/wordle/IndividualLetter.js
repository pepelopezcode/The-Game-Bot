import React from 'react'

function IndividualLetter({xPosition, yPosition, board}) {
    const letter = board[yPosition][xPosition]
  return (
    <div className='letter'>{letter}</div>
  )
}

export default IndividualLetter