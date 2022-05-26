import React, {useEffect, useState} from 'react'
import WordleBoard from './WordleBoard'
import WordleKeyboard from './WordleKeyboard'
import Words from './Words';

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
    const [roundOver, setRoundOver] = useState(false)
    const [onEnterPress, setOnEnterPress] = useState(false)
    const [wordList, setWordList] = useState(Words.words)
    const [wordAnswer, setWordAnswer] = useState((wordList[getRandomInt(2315)]).toUpperCase())
    
   
    console.log(wordAnswer)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
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
        let currentWordFull = ''
        for (let i = 0; i < 5; i++){
            currentWordFull += board[currentWord.currentAttempt][i]
        }
        // if (wordAnswer === currentWordFull) {
        //     alert('nice')
        //     setBoard(boardDefault);
        //     setCurrentWord({ currentAttempt: 0, currentLetter: 0 })
        // }

    }

    function onDelete(){
        if (currentWord.currentLetter === 0) return;
        const newBoard = [...board]
        newBoard[currentWord.currentAttempt][currentWord.currentLetter - 1] = ""
        setBoard(newBoard)
        setCurrentWord({...currentWord, currentLetter: currentWord.currentLetter - 1})
        
    }

    useEffect(() =>{
        
    }, [setOnEnterPress])

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