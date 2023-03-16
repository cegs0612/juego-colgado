import React, {useState,useEffect} from "react";
import WordLetter from "./WordLetter";
import ButtonLetter from "./ButtonLetter";
import ImgComp from "./ImgComp";
import ModalLost from "./ModalLost";
import ModalAnswer from "./ModalAnswer";

import "../css/game.css";

function Game({word,getNewWord,retryGame}) {
    const initialLetters = [
        {letter:"a" , selected: false , id: "a"},
        {letter:"b" , selected: false , id: "b" },
        {letter:"c" , selected: false , id: "c"},
        {letter:"d" , selected: false , id: "d"},
        {letter:"e" , selected: false , id: "e"},
        {letter:"f" , selected: false , id: "f"},
        {letter:"g" , selected: false , id: "g"},
        {letter:"h" , selected: false , id: "h"},
        {letter:"i" , selected: false , id: "i"},
        {letter:"j" , selected: false , id: "j"},
        {letter:"k" , selected: false , id: "k"},
        {letter:"l" , selected: false , id: "l"},
        {letter:"m" , selected: false , id: "m"},
        {letter:"n" , selected: false , id: "n"},
        {letter:"o" , selected: false , id: "o"},
        {letter:"p" , selected: false , id: "p"},
        {letter:"q" , selected: false , id: "q"},
        {letter:"r" , selected: false , id: "r"},
        {letter:"s" , selected: false , id: "s"},
        {letter:"t" , selected: false , id: "t"},
        {letter:"u" , selected: false , id: "u"},
        {letter:"v" , selected: false , id: "v"},
        {letter:"w" , selected: false , id: "w"},
        {letter:"x" , selected: false , id: "x"},
        {letter:"y" , selected: false , id: "y"},
        {letter:"z" , selected: false , id: "z"},
    ]
    const wordInfo = word;
    let wordString = wordInfo.word.split("");
    
    
    const wordObject = [];
    for (let index = 0; index < wordString.length; index++) {
        wordObject.push({
        id: index,
        letter:wordString[index],
        discovered: false
        })   
    }   
    
    const [discoveredLetter, setDiscoveredLetter] = useState(wordObject);
    const [gameStatus, setGameStatus]= useState(0);
    const [letters, setLetters] = useState(initialLetters) ;
    const [isModalLostOpen, setIsModalLostOpen]=useState(false);
    const [isAnswerOpen, setIsAnswerOpen]=useState(false);
    

    const showAnswer = ()=>{
        setIsAnswerOpen(true);
        setIsModalLostOpen(false);
    }

    const onClickButtonLetter = (id)=>{
        const newLetters = [...letters];
        const selectedLetter = newLetters.find((value)=>value.id===id);
        selectedLetter.selected=true;
        setLetters(newLetters);//disable button

        // handles discovered letter,correct answer
        const newDiscoveredLetter = [...discoveredLetter];   
        let correctAnswer = [];    
        newDiscoveredLetter.forEach(element=>{
            if(element.letter===selectedLetter.letter){
                element.discovered=true;
                correctAnswer.push(element.letter);
            }
        });
        setDiscoveredLetter(newDiscoveredLetter); //opens a letter if discovered;
        
        //handles wrong answer
        if(correctAnswer.length===0){
            setGameStatus(gameStatus+1); // renders new hangman image if incorrect;
        };
    };
    useEffect(()=>{
        //verifies special characters or spaces in the word;
        const newDiscoveredLetter = [...discoveredLetter];       
        newDiscoveredLetter.forEach(element=>{
            let match=false;
            for (let i = 0; i < initialLetters.length; i++) {
                if(element.letter===initialLetters[i].letter){
                    return match=true;
                }
            }
            if(match===false){
                element.discovered=true;
            }
        });
        setDiscoveredLetter(newDiscoveredLetter);
    },[])


    useEffect(()=>{
        //verifies lost game
        if (gameStatus===12) {
            setIsModalLostOpen(true);
        };
    },[gameStatus])

    useEffect(()=>{
        //verifies won game
        let countDiscoveredLetters = 0
        discoveredLetter.forEach(element=>{
            if(element.discovered===true)countDiscoveredLetters++
        })
        if (countDiscoveredLetters===word.word.length){
            showAnswer();
        }
    },[discoveredLetter])

    const renderModalLost = (isModalLostOpen)=>{
        if(isModalLostOpen){
            return(           
                <ModalLost
                    show="true"
                    onClickShowAnswer={showAnswer}
                    retryGame={retryGame}/>
                )
        }
    }

    const renderModalAnswer = (isAnswerOpen)=>{
        if(isAnswerOpen){
            console.log("open word answer",wordInfo)
            return <ModalAnswer show="true" word={wordInfo} getNewWord={getNewWord}/>
        }
    }

    return ( 
        <div className="game" >
            <div className="sec1">
                <ImgComp gameStatus={gameStatus} />
            </div>
            <div className="sec2">
               {discoveredLetter.map((discoveredLetter)=>{return <WordLetter letterParams = {discoveredLetter}/>})} 
            </div>
            <div className="sec3">
                <div className="letters">
                    {letters.map((letters)=>{return <ButtonLetter letterParams={letters} onClick={onClickButtonLetter}/>})}
                </div>
            </div>        
            {renderModalLost(isModalLostOpen)}
            {renderModalAnswer(isAnswerOpen)}
        </div>
    );
}

export default Game;