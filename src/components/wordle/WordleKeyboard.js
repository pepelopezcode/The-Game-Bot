import React, { useEffect } from 'react'
import KeyboardLetter from './KeyboardLetter'

function WordleKeyboard({ onEnter, onDelete, onKeySelect }) {
  const firstRowOfKeys = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]
  const secondRowOfKeys = ["A", "S", "D", "F", "G", "H", "J", "K", "L"]
  const thirdRowOfKeys = ["Z", "X", "C", "V", "B", "N", "M"]

  function handleKeyboardPress(event){
    
    if (event.key === "Enter"){
      onEnter()
    } else if (event.key === "Backspace"){
      onDelete()
    } else {
      firstRowOfKeys.forEach((key) => {
        if (event.key.toUpperCase() === key){
          onKeySelect(key)
        }
      });
      secondRowOfKeys.forEach((key) => {
        if (event.key.toUpperCase() === key){
          onKeySelect(key)
        }
      });
      thirdRowOfKeys.forEach((key) => {
        if (event.key.toUpperCase() === key){
          onKeySelect(key)
        }
      });
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardPress);
    return () => {
      document.removeEventListener("keydown", handleKeyboardPress);
    }
  }, [handleKeyboardPress])

  return (
    <div className='keyboard' onKeyDown={(e) => handleKeyboardPress(e)}> 
      <div className='line1'>{firstRowOfKeys.map(keyboardLetter => {
        return (<KeyboardLetter onKeySelect={onKeySelect} keyboardLetter={keyboardLetter} key={keyboardLetter} />)
      })}</div>
      <div className='line2'>{secondRowOfKeys.map(keyboardLetter => {
        return (<KeyboardLetter onKeySelect={onKeySelect} keyboardLetter={keyboardLetter} key={keyboardLetter} />)
      })}</div>
      <div className='line3'>
        <KeyboardLetter onDelete={onDelete} keyboardLetter={"DELETE"} />
        {thirdRowOfKeys.map(keyboardLetter => {
          return (<KeyboardLetter onKeySelect={onKeySelect} keyboardLetter={keyboardLetter} key={keyboardLetter} />)
        })}

        <KeyboardLetter onEnter={onEnter} keyboardLetter={"ENTER"} />
      </div>

    </div>
  )
}

export default WordleKeyboard