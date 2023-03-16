import React , {useEffect, useState} from "react";
import Axios from "axios";
import Game from "./pages/Game";
import Main from "./pages/Main";
import "./css/app.css"

function App() {
  const [word,setWord]=useState({});
  const [game,setGame]=useState(0);
  const [isMainOpen,setIsMainOpen] = useState(false);
  const [isGameOpen,setIsGameOpen] = useState(false);
    
    
  const getNewWord = ()=>{
    setIsGameOpen(false); //dismounts game
    const options = {
    method: 'GET',
    url: 'https://wordsapiv1.p.rapidapi.com/words/',
    params: {random: 'true'},
    headers: {
      'X-RapidAPI-Key': 'cd82ea1e43msh2136084badf396cp13667ajsn3f4f58c01a93',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };
    Axios.request(options)
    .then(function (response) {
      setWord(response.data);
    }).then(()=>{
      setGame(1);
      setIsGameOpen(true);
    }).catch(function (error) {
      console.error(error);
    });      
  }

  const retryGame = ()=>{
    setIsGameOpen(false);//dismounts game
    console.log("setGame 2")
    setGame(2);
  }

  useEffect(()=>{
    if(game===0){
      setIsMainOpen(true);
    }
    
    if(game===1){
      setIsMainOpen(false);
      setIsGameOpen(true);
    }

    if(game===2){
      setIsMainOpen(false);
      setIsGameOpen(true);
    } 
  },[game])

  const render = (isMainOpen,isGameOpen)=>{
    if (isMainOpen){
      return <Main getNewWord={getNewWord}/>;
    };
    if (isGameOpen){
      console.log("render game");
      return <Game word={word} getNewWord ={getNewWord} retryGame={retryGame}/>;
    }
  }

  return (
    <div className="screen">
      {render(isMainOpen,isGameOpen)}
    </div>

  );
}

export default App;




