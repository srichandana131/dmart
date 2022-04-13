import React,{useState} from 'react';


const Markslist=(prop)=>{
    const [marks,setMarks]=useState("");
    const [msg, setMsg]=useState("");

const markClick=(e)=>{
    switch (true){ 
        case marks<30:
        setMsg("fail");

        break;
        case marks<35:
        setMsg("bad");
        break;
        case marks<55 && marks>35:
        setMsg("ok marks");
        break;
        default :
       setMsg("defaultmarks")
    }   
}
const changeInput=(e)=>{
    setMarks(e.target.value)
}
return(
<div>
    
    <div>{msg}</div>
    <input onChange={changeInput} />
    <button onClick={markClick}>submit</button>
</div>
)
}
export default Markslist;