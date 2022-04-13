import React,{useState} from 'react';

const PrintTime=(props)=>{

const [time,setTime]=useState("");

let count=0;
 const timeClick=(e)=>{
    
    setInterval(()=>{
        count=count+1;
        if (count<=60){
            setTime(count);
        }
        },1000)
 }

    return(
        <div>
            <div>{time}</div>
            <button onClick={timeClick}>start</button>
        </div>
    )
}
export default PrintTime;
