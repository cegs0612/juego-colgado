import React, {useEffect, useState}  from "react";
import { motion } from "framer-motion";
import "../css/imgComp.css"

const counter = [
    {id: "base" , number: 1 },
    {id: "a" , number: 2 },
    {id: "b" , number: 3 },
    {id: "c" , number: 4 },
    {id: "d" , number: 5 },
    {id: "rope" , number: 6 },
    {id: "head" , number: 7 },
    {id: "body" , number: 8 },
    {id: "leftarm" , number: 9 },
    {id: "rightarm", number: 10 },
    {id: "leftleg", number: 11 },
    {id: "rightleg" , number: 12 }
]


function ImgComp({gameStatus}) {
    const [ishanging, setIsHanging]=useState(false)
    
    useEffect(()=>{
        if (gameStatus>0) {
            counter.forEach(element => {
                if(element.number<=gameStatus){
                    document.getElementById(element.id).classList.replace("hidden","visible");
                }
            });
        }
    },[])
    

    useEffect(()=>{
        if(gameStatus!==0){
            let replace =counter.find((element)=>element.number===gameStatus);
            document.getElementById(replace.id).classList.replace("hidden","visible");
        }
    },[counter,gameStatus])

    useEffect(()=>{   
        if (gameStatus===12) {
            setIsHanging(true);
        }
    },[gameStatus])


    return ( 
        <>
        <div className="horca">
                    <img src="./images/typec.png" alt="" id="d" className="hidden"/>
                    <img src="./images/typeb.png" alt="" id="c" className="hidden"/>
                    <img src="./images/typea.png" alt="" id="b" className="hidden"/>
                    <img src="./images/typea.png" alt="" id="a" className="hidden"/>
                    <img src="./images/base.png" alt="" id="base" className="hidden"/>
                </div>
                <motion.div 
                className="hangman" 
                variants={{
                    hanging: {rotateZ:[15,-15,15],transition:{repeat:Infinity,duration:5}},
                    nohanging: {rotate:0}
                }}  
                initial="nohanging"
                animate={ishanging? "hanging" : "nohanging"} 
                >
                    <img src="./images/rope.png" alt="" id="rope" className="hidden"/>
                    <img src="./images/head.png" alt="" id="head" className="hidden"/>
                    <img src="./images/body.png" alt="" id="body" className="hidden"/>
                    <img src="./images/leftarm.png" alt="" id="leftarm" className="hidden"/>
                    <img src="./images/rightarm.png" alt="" id="rightarm" className="hidden"/>
                    <img src="./images/leftleg.png" alt="" id="leftleg" className="hidden"/>
                    <img src="./images/rightleg.png" alt="" id="rightleg" className="hidden"/>
                </motion.div>
        </>
    );
}

export

default ImgComp;