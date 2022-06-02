import React from 'react'

function KeyboardLetter({keyboardLetter, onEnter, onDelete, onKeySelect, disabled}) {

    function onKeyClick(){
        if (keyboardLetter === "ENTER"){
            onEnter()
        } else if (keyboardLetter === "DELETE"){
            onDelete()
        } else {
            onKeySelect(keyboardLetter)
        }
    }
    
  return (
    <div className="key" id={keyboardLetter === "ENTER" || keyboardLetter === "DELETE" ? "big" : disabled && 'disabled'} onClick={onKeyClick} >{keyboardLetter}</div>
  )
}

export default KeyboardLetter