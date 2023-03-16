import React from "react";
import "../css/modal.css";
import { motion } from "framer-motion";

function ModalAnswer({show,word,getNewWord}) {
    
    const wordData = word;
    console.log(wordData)
    return ( 
        <motion.div className="modal"
        variants={{
            open: { position:"fixed",visibility:"visible"},
            closed: { opacity: 0, visibility:"hidden" }
        }}
        animate={show? "open":"closed"}>
                <div className="content">
                    <h1>Answer</h1>
                    <h2>{wordData.word}</h2>
                    
                    <motion.button 
                    className="b1"
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    onClick={()=>{getNewWord()}}
                    >PLAY AGAIN</motion.button>
                                      
                </div>
            </motion.div>
    );
}

export default ModalAnswer;