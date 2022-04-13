import React, { useState } from 'react';


const Even = (props) => {
    const [even, setEven] = useState("");
    const [num, setNum] = useState("");

    const evenClick=(e)=>{
        var iseven=true;
        for (let i = 2; i < num; i++) {
            if (i%2==0){
                iseven=false;
            }
        }
        if(iseven){
           
            setEven("is even number");
        }else{
           
            setEven("is odd number");
        }

    }
    const changeInput = (e) => {
        setNum(e.target.value)
    }
return (
    <div>
         <div>{even}</div>
            <input onChange={changeInput} />
            <button onClick={evenClick} >submit</button>
    </div>
)
}
export default Even;