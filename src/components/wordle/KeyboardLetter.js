import React from 'react'

function KeyboardLetter({keyboardLetter, onEnter, onDelete, onKeySelect}) {

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
    <div className="key"  onClick={onKeyClick} >{keyboardLetter}</div>
  )
}

export default KeyboardLetter