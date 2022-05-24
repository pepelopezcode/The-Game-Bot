import React, { useState } from 'react'
import IndividualLetter from './IndividualLetter';

function WordleBoard({board}) {
   
    return (
        <div className="board">
            <div className='row'>
                <IndividualLetter xPosition={0} board={board} yPosition={0} />
                <IndividualLetter xPosition={1} board={board} yPosition={0} />
                <IndividualLetter xPosition={2} board={board} yPosition={0} />
                <IndividualLetter xPosition={3} board={board} yPosition={0} />
                <IndividualLetter xPosition={4} board={board} yPosition={0} />
            </div>
            <div className='row' >
                <IndividualLetter xPosition={0} board={board} yPosition={1} />
                <IndividualLetter xPosition={1} board={board} yPosition={1} />
                <IndividualLetter xPosition={2} board={board} yPosition={1} />
                <IndividualLetter xPosition={3} board={board} yPosition={1} />
                <IndividualLetter xPosition={4} board={board} yPosition={1} />
            </div>
            <div className='row'>
                <IndividualLetter xPosition={0} board={board} yPosition={2} />
                <IndividualLetter xPosition={1} board={board} yPosition={2} />
                <IndividualLetter xPosition={2} board={board} yPosition={2} />
                <IndividualLetter xPosition={3} board={board} yPosition={2} />
                <IndividualLetter xPosition={4} board={board} yPosition={2} />
            </div>
            <div className='row'>
                <IndividualLetter xPosition={0} board={board} yPosition={3} />
                <IndividualLetter xPosition={1} board={board} yPosition={3} />
                <IndividualLetter xPosition={2} board={board} yPosition={3} />
                <IndividualLetter xPosition={3} board={board} yPosition={3} />
                <IndividualLetter xPosition={4} board={board} yPosition={3} />
            </div>
            <div className='row'>
                <IndividualLetter xPosition={0} board={board} yPosition={4} />
                <IndividualLetter xPosition={1} board={board} yPosition={4} />
                <IndividualLetter xPosition={2} board={board} yPosition={4} />
                <IndividualLetter xPosition={3} board={board} yPosition={4} />
                <IndividualLetter xPosition={4} board={board} yPosition={4} />
            </div>
            <div className='row'>
                <IndividualLetter xPosition={0} board={board} yPosition={5} />
                <IndividualLetter xPosition={1} board={board} yPosition={5} />
                <IndividualLetter xPosition={2} board={board} yPosition={5} />
                <IndividualLetter xPosition={3} board={board} yPosition={5} />
                <IndividualLetter xPosition={4} board={board} yPosition={5} />
            </div>
        </div>
    )
}

export default WordleBoard