import React, {useState, useEffect} from 'react';
import './App.css';
import Chose from './Components/Chose';
import Heder from './Components/Heder';
import Rules from './Components/Rules';
import Paper from './Components/Paper';
import Stone from './Components/Stone';
import Scissors from './Components/Scissors';


function App() {
  const [rules, setRules] = useState(false)
  const [chose, setChose] = useState({paper: false, stone: false, scissors: false})
  const [score, setScore] = useState(0)
  const clikPaper = () => {
    setChose({paper: true, stone: false, scissors: false})
  }
  const clikStone = () => {
    setChose({paper: false, stone: true, scissors: false})
  }
  const clikScissors = () => {
    setChose({paper: false, stone: false, scissors: true})
  }
  const random = () => {
    return Math.floor(Math.random() * 99)
  }

  return (
    <div className="App">   
     {rules && <Rules deletRules = {() => setRules(false)} /> } 
      <Heder score = {score}/>

      <div>
    

    {chose.paper === false && chose.stone === false && chose.scissors === false  ? <Chose clikScissors = {clikScissors} clikStone = {clikStone} clikPaper = {clikPaper}/>  : (chose.paper === true && chose.stone === false && chose.scissors === false ?  <Paper 
      random = {random()}
      goManePage = {() => setChose({paper: false,  stone: false, scissors: false})

    }
      scorePlus = {() => setScore(score + 1)}
      scoreMinus = {() => setScore(score - 1)}
      /> : null)
    }

     {chose.paper === false && chose.stone === false && chose.scissors === false  ? <Chose clikScissors = {clikScissors} clikPaper = {clikPaper} clikStone = {clikStone}/>  : (chose.paper === false && chose.stone === true && chose.scissors === false ?  <Stone 
      random = {random()}
      goManePage = {() => setChose({paper: false,  stone: false, scissors: false})}
      scorePlus = {() => setScore(score + 1)}
      scoreMinus = {() => setScore(score - 1)}
      /> : null)
    }
      
      {chose.paper === false && chose.stone === false && chose.scissors === false  ? <Chose clikScissors = {clikScissors} clikPaper = {clikPaper} clikStone = {clikStone}/>  : (chose.paper === false && chose.stone === false && chose.scissors === true ?  <Scissors
      random = {random()}
      goManePage = {() => setChose({paper: false,  stone: false, scissors: false})}
      scorePlus = {() => setScore(score + 1)}
      scoreMinus = {() => setScore(score - 1)}
      /> : null)
    }

      <button className='rul' onClick={() => setRules(true)}>RULES</button>
      </div>
    </div>
  );
}

export default App;
