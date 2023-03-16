import React  from "react";
import "../css/modal.css";
import { motion } from "framer-motion";

function ModalLost({show,onClickShowAnswer,retryGame}) {
    
    return ( 
        <motion.div className="modal"
        variants={{
            open: { position:"fixed",visibility:"visible"},
            closed: { opacity: 0, visibility:"hidden" }
        }}
        animate={show? "open":"closed"}
        >
                <div className="content">
                    <h1>Game Over</h1>
                    <h2>Do you want to try again?</h2>
                    
                    <motion.button 
                    className="b1"
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    onClick={()=>{retryGame()}}
                    >TRY AGAIN</motion.button>
                    <motion.button 
                    className="b2"
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    onClick={()=>{onClickShowAnswer()}}>See the correct answer</motion.button>
                </div>
            </motion.div>
    );
}

export default ModalLost;