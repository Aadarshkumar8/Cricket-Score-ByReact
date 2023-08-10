import React,{useEffect, useState} from 'react'
import '../styles/CricketScore.css'

function CricketScore() {
    const [score,setScore]=useState(0);
    const [wicket,setWicket]=useState(0);
    const [over,setOver]=useState(0);
    const [count,setCount]=useState(0);

    useEffect(()=>{
     if(count===6){
        setOver(over+1);
        setCount(0);
     }
    },[count])
    const addScore=(num)=>{
        if(num!=='wicket'){
            setScore(score+num);
            setCount(count+1);
        }else{
            setWicket(wicket + 1);
            setCount(count+1);
        }
        
    }
  return (
    <div className='container'>
      <h1>CRICKET SCORE BOARD</h1>
      <h2>IND/PAK</h2>
        <h2>Score:{score}/{wicket}</h2>
        <h2>Over:{over}</h2>
      <div className="btn">
      <button onClick={()=>addScore(0)}>0</button>
         <button onClick={()=>addScore(1)}>1</button>
         <button onClick={()=>addScore(2)}>2</button>
         <button onClick={()=>addScore(3)}>3</button>
         <button onClick={()=>addScore(4)}>4</button>
         <button onClick={()=>addScore(5)}>5</button>
         <button onClick={()=>addScore(6)}>6</button>
         <button className='wic' onClick={()=>addScore('wicket')}>Wicket</button>
      </div>
    </div>
  )
}

export default CricketScore