import React, { useEffect, useState } from 'react'
import './stopwatch.css'
const Stopwatcjh = () => {

    const [sec,setSec]=useState(0);
    const [min,setMin]=useState(0);


    // let interval;
    // useEffect(()=>{
    //     interval=setInterval(()=>{
    //         setSec(sec+1);
    //     },1000);
    //     return ()=> clearInterval(interval);
    // });
    let timer;
    useEffect(()=>{
        // if(isrunning){
        timer=setInterval(() => {
            setSec(sec+1);

            if(sec==59){
                setMin(min+1);
                setSec(0);
            }
        }, 1000);
        return ()=> clearInterval(timer);
        // }
    });
    const start=()=>{
        setSec(sec+1);
    }

    const reset=()=>{
        setSec(0);
        setMin(0);
    }

    const stop=()=>{

    }

    
  return (
    <div className='clock'>
      <h2> {min} : {sec}</h2>
      <div className="buttons">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}> Reset</button>
      </div>
    </div>
  )
}

export default Stopwatcjh
