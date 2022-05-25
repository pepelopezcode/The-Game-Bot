import React from 'react'
import IndividualLetter from './IndividualLetter';

function WordleBoard({board, currentWord, wordAnswer}) {
   
    return (
        <div className="board">
            <div className='row'>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={0} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={0} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={0} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={0} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={0} />
            </div>
            <div className='row' >
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={1} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={1} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={1} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={1} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={1} />
            </div>
            <div className='row'>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={2} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={2} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={2} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={2} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={2} />
            </div>
            <div className='row'>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={3} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={3} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={3} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={3} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={3} />
            </div>
            <div className='row'>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={4} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={4} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={4} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={4} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={4} />
            </div>
            <div className='row'>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={5} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={5} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={5} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={5} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={5} />
            </div>
        </div>
    )
}

export default WordleBoard