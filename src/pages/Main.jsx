import React from "react";
import { motion } from "framer-motion";
import "../css/main.css"

function Main({getNewWord}) {
    
    return ( 
        <div className="main">
            <div className="container">
                <motion.div 
                className="hang"
                animate={{backgroundColor:["#791909","#905907","#905907","#905907","#791909"]}}
                transition={{repeat:Infinity,duration:5}}
                >
                <img src="./images/hang.png" alt="" />
                </motion.div>
                <motion.div 
                className="man"
                animate={{rotateZ:[15,-15,15]}}
                transition={{repeat:Infinity,duration:5}}
                >
                    <img src="./images/ropeMain.png" alt="" />
                </motion.div>
                <motion.button className="start"
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
                onClick={()=>{getNewWord()}}
                >Start</motion.button>
            </div>
        </div>
    );
}

export default Main;