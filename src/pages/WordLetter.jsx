import React from "react";
import "../css/wordLetter.css"

function showLetter(discovered) {
    if(discovered){return "visible"} else {return "hidden"}
}

function displayDiv(letter) {
    if(letter===" "){
        return "letter hidden"
    } else {
        return "letter visible"
    }
}

function WordLetter({letterParams}) {
    let letter = letterParams.letter;
    let id = letterParams.id;

    return ( 
        <div className={displayDiv(letter)} key={id}>
            <p className={showLetter(letterParams.discovered)}>{letter}</p>
        </div>
           
    );
}

export default WordLetter;