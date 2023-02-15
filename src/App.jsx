import React, { useState } from 'react'
import "./App.css";

const App = () => {
     const [time,setTimer]=useState(0);
     function increase(){
        time<10&&setTimer(time+1);
     }
     function decrease(){
       time>0&&setTimer(time-1);
     }
    let s;
        if(time>=0&&time<=4)
        {
            s="Green"
        }
        else if(time>=5&&time<=9){
            s="Blue";
        }
        else{
            s="Red";
        }
       
   
  return (
    <div className="app">
       
            
      <h1 style={{color:s}}>{time}</h1>
     
     <div className='button'>
      <button onClick={increase}>Increament(+)</button>
      <button onClick={decrease}>decreament(-)</button>
     </div>

    </div>
  )
}

export default App
