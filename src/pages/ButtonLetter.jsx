import React from "react";
import {motion} from "framer-motion";
import "../css/buttonLetter.css";

function getDisabled(selected) {
    if(selected){return true} else{return false}
}


function ButtonLetter({letterParams,onClick}) {
    let letter = letterParams.letter;
    let id = letterParams.id;
    return (  
        <motion.button 
        disabled={getDisabled(letterParams.selected)} 
        onClick={()=>onClick(id)}
        key={id} className="button"
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        >{letter}</motion.button>
    );
}

export default ButtonLetter;