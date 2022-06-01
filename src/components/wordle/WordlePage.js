import React, { useEffect, useState } from 'react'
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
    const words = Words.words
    const [board, setBoard] = useState(boardDefault)
    const [currentWord, setCurrentWord] = useState({ currentAttempt: 0, currentLetter: 0 })
    const [roundOver, setRoundOver] = useState(false)
    const [onEnterPress, setOnEnterPress] = useState(1)
    
    const [wordAnswer, setWordAnswer] = useState((words[getRandomInt(2315)]).toUpperCase())
    const [score, setScore] = useState(0)
    
    
    console.log(wordAnswer)
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function onKeySelect(keyValue) {
        if (currentWord.currentLetter > 4) return;
        const newBoard = [...board];
        newBoard[currentWord.currentAttempt][currentWord.currentLetter] = keyValue
        setBoard(newBoard)
        setCurrentWord({ ...currentWord, currentLetter: currentWord.currentLetter + 1 })
    }

    function onEnter() {
        if (currentWord.currentLetter !== 5) return;


        let currentWordFull = ''
        for (let i = 0; i < 5; i++) {
            currentWordFull += board[currentWord.currentAttempt][i]
        }

        if (words.includes(currentWordFull.toLocaleLowerCase())) {
            setCurrentWord({ currentAttempt: currentWord.currentAttempt + 1, currentLetter: 0 })
        } else {
            alert("Not Real Word")
        }
        if (wordAnswer === currentWordFull) {
            setScore(((6 - currentWord.currentAttempt)*100) + score)
            setOnEnterPress(onEnterPress + 1)
            
        }
        
        if (currentWord.currentAttempt === 5){
            
            setOnEnterPress(onEnterPress + 1)
        }

    }

    function onDelete() {
        if (currentWord.currentLetter === 0) return;
        const newBoard = [...board]
        newBoard[currentWord.currentAttempt][currentWord.currentLetter - 1] = ""
        setBoard(newBoard)
        setCurrentWord({ ...currentWord, currentLetter: currentWord.currentLetter - 1 })

    }


    useEffect(() => {
        if (onEnterPress > 1) {
            
            if (currentWord.currentAttempt === 6){
                alert(`Nice Try the correct word was ${wordAnswer}`)
                setBoard(boardDefault);
                setCurrentWord({ currentAttempt: 0, currentLetter: 0 })
                setWordAnswer((words[getRandomInt(2315)]).toUpperCase())
            } else if (onEnterPress === 6){
                alert(`gameover final score: ${score}`)
            }else{
                alert('Next Word')
                setBoard(boardDefault);
                setCurrentWord({ currentAttempt: 0, currentLetter: 0 })
                setWordAnswer((words[getRandomInt(2315)]).toUpperCase())
            }
            
        }

    }, [onEnterPress])

    return (
        <div>
            <h1>WordlePage</h1>
            <p>Score:{score}</p>
            <div className="game" >
                <WordleBoard board={board} currentWord={currentWord} wordAnswer={wordAnswer} />
                <WordleKeyboard onEnter={onEnter} onDelete={onDelete} onKeySelect={onKeySelect} />
            </div>

        </div>
    )
}

export default WordlePage