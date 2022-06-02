import React from 'react'
import IndividualLetter from './IndividualLetter';

function WordleBoard({board, currentWord, wordAnswer, disabledLetters, setDisabledLetters}) {
   
    return (
        <div className="board">
            <div className='row'>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={0} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters} />
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={0} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={0} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={0} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={0} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
            </div>
            <div className='row' >
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={1} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={1} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={1} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={1} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={1} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
            </div>
            <div className='row'>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={2} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={2} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={2} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={2} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={2} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
            </div>
            <div className='row'>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={3} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={3} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={3} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={3} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={3} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
            </div>
            <div className='row'>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={4} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={4} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={4} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={4} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={4} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
            </div>
            <div className='row'>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={0} board={board} yPosition={5} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={1} board={board} yPosition={5} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={2} board={board} yPosition={5} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={3} board={board} yPosition={5} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
                <IndividualLetter wordAnswer={wordAnswer} currentWord={currentWord} xPosition={4} board={board} yPosition={5} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters}/>
            </div>
        </div>
    )
}

export default WordleBoard