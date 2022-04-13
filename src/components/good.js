import React,{useState} from 'react';

const GoodPerson=(props)=>{ 

const [name, setName]=useState("");
const [msg,setMsg]=useState("");

const personClick=(e)=>{
if(name=="chandu"){
    setMsg("is very good girl");
}else if(name=="venu"){
    setMsg("venu is bad boy");
}else{
    setMsg("i dont kow");
}

}


const changeInput=(e)=>{
    setName(e.target.value)
}
    return(
        <div>
            <div>{msg}</div>
            <input onChange={changeInput}/>
            <button onClick={personClick}>submit</button>
           
            <div>hello</div>
            
        </div>
    )
}
export default GoodPerson;