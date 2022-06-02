import React, { useEffect, useState } from 'react'

import WordleBoard from './WordleBoard'
import WordleKeyboard from './WordleKeyboard'
import Words from './Words';
import {useNavigate} from 'react-router-dom'

function WordlePage({user, score, setScore, setNewScore}) {
    const navigate = useNavigate()
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
    const [onEnterPress, setOnEnterPress] = useState(1)

    const [wordAnswer, setWordAnswer] = useState((words[getRandomInt(2315)]).toUpperCase())
    const [allWordleInfo, setAllWordleInfo] = useState({})
    const [disabledLetters, setDisabledLetters] = useState([])
    


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
            setAllWordleInfo({
                'board': board,
                'currentAttempt': currentWord,
                'round': onEnterPress,
                'totallyNotAnswer': wordAnswer,
                'score': score
            })
        } else {
            alert("Not Real Word")
        }
        if (wordAnswer === currentWordFull) {
            setScore(((6 - currentWord.currentAttempt) * 100) + score)
            setOnEnterPress(onEnterPress + 1)

        }

        if (currentWord.currentAttempt === 5) {

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
    //just for demonstration purposes
    useEffect(() => {
        console.log(wordAnswer)
    },[wordAnswer])


    useEffect(() => {
        
        if (onEnterPress > 1) {

            if (currentWord.currentAttempt === 6) {
                alert(`Nice Try the correct word was ${wordAnswer}`)
                setBoard(boardDefault);
                setCurrentWord({ currentAttempt: 0, currentLetter: 0 })
                setWordAnswer((words[getRandomInt(2315)]).toUpperCase())
            } else if (onEnterPress === 6) {
                navigate("/gameover")
                fetch('http://localhost:3000/scores', {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        score: score,
                        user_id: user.id
                    }),
                })
                setBoard(boardDefault);
                setCurrentWord({ currentAttempt: 0, currentLetter: 0 })
                setWordAnswer((words[getRandomInt(2315)]).toUpperCase())
                setDisabledLetters([])
                setNewScore((prev) => !prev)
            } else {
                alert('Next Word')
                setBoard(boardDefault);
                setCurrentWord({ currentAttempt: 0, currentLetter: 0 })
                setWordAnswer((words[getRandomInt(2315)]).toUpperCase())
                setDisabledLetters([])
            }

        }

    }, [onEnterPress])

    return (
        <div>
            <h1 className="header">Wordle</h1>
            <p  className="wordlePage">Score:{score}</p>
            <p className="wordlePage">Current Round: {onEnterPress}</p>
            <div className="game" >
                <WordleBoard board={board} currentWord={currentWord} wordAnswer={wordAnswer} disabledLetters={disabledLetters} setDisabledLetters={setDisabledLetters} />
                <WordleKeyboard onEnter={onEnter} onDelete={onDelete} onKeySelect={onKeySelect} disabledLetters={disabledLetters} />
            </div>
            
        </div>
    )
}

export default WordlePage