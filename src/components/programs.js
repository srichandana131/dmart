import React,{useState} from 'react';


const Programs=(props)=>{
    const [array,setArray]=useState([]);

    const submitClick=(e)=>{
        const arr=["venu","chandu","chandu","sri","cc"];
        let uniqueArr=[];
        const counts = {};
        for (let i of arr){
        counts[i] = (counts[i] || 0) + 1;
        if (uniqueArr.indexOf(i)===-1){
        uniqueArr.push(i);
         
        }
        }
        console.log(uniqueArr);
        setArray(uniqueArr);
        console.log(counts);
        
        
    }
return(
    <div>
    <div>{array}</div>
    <button onClick={submitClick} type="button" class="btn btn-dark">submit</button>
    </div>
)

}
export default Programs;