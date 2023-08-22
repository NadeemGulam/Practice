import React, { useEffect, useState } from 'react'
import './stopwatch.css'
const Stopwatch = () => {
    const [sec,setSec]=useState(0);
    const [min,setmin]=useState(0);
    const [isrunning, setIsRunning] =useState(false);
    let timer;
    useEffect(()=>{
        if(isrunning){
        timer=setInterval(() => {
            setSec(sec+1);

            if(sec===59){
                setmin(min+1);
                setSec(0);
            }
        }, 1000);
        return ()=> clearInterval(timer);
        }
    });

    const start=()=>{
        setIsRunning(true);
    }
    const stop=()=>{
        setIsRunning(false);
        clearInterval(timer);
    }
    const reset=()=>{
        setIsRunning(false);
        setSec(0);
        setmin(0);
    }
  return (
    <div className='stop_watch'>
      <h2>{min<10?"0"+min:min} minutes </h2>
      <h2>{sec<10?"0"+sec:sec} seconds </h2>
      <div className='buttons'>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
