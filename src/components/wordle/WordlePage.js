import React, {useState} from 'react'
import WordleBoard from './WordleBoard'
import WordleKeyboard from './WordleKeyboard'

function WordlePage() {
    const boardDefault =
        [["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]];
    const [board, setBoard] = useState(boardDefault)
    const [currentWord, setCurrentWord] = useState({ currentAttempt: 0, currentLetter: 0 })
    const wordAnswer = 'RIGHT'


    function onKeySelect(keyValue){
        if (currentWord.currentLetter > 4) return;
        const newBoard= [...board];
        newBoard[currentWord.currentAttempt][currentWord.currentLetter] = keyValue
        setBoard(newBoard)
        setCurrentWord({...currentWord, currentLetter: currentWord.currentLetter + 1})
    }

    function onEnter(){
        if (currentWord.currentLetter !== 5) return;
        setCurrentWord({ currentAttempt: currentWord.currentAttempt + 1, currentLetter: 0})
    }

    function onDelete(){
        if (currentWord.currentLetter === 0) return;
        const newBoard = [...board]
        newBoard[currentWord.currentAttempt][currentWord.currentLetter - 1] = ""
        setBoard(newBoard)
        setCurrentWord({...currentWord, currentLetter: currentWord.currentLetter - 1})
    }

  return (
    <div>
        <h1>WordlePage</h1>
        <div className="game" >
            <WordleBoard board={board} currentWord={currentWord} wordAnswer={wordAnswer} />
            <WordleKeyboard onEnter={onEnter} onDelete={onDelete} onKeySelect={onKeySelect} />
        </div>
        
    </div>
  )
}

export default WordlePage