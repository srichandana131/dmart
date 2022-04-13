import React,{useState,useEffect} from 'react';
import axios from 'axios';
 
const Example=(props)=>{
    const [chandu,setChandu] = useState('');
    const [data,setData] = useState([]);



    useEffect(()=>{
         axios.get(`https://reqres.in/api/users?page=2`).then((res)=>{
            setData(res.data.data);
        })
    },[])

    
   const changeInput=(e)=>{
       setChandu(e.target.value)

   }
   console.log(data,"resppppp++++");

    return(
        <div>
            <br/>
            <input onChange={changeInput} type="text" id="fname" name="fname" />
            <p>{chandu}</p>
            {data.map((ele)=>{
              return   <div>
              <h3>{ele.first_name}-{ele.last_name}</h3>
              <small>{ele.email}</small>
              </div>
            })}
        </div>
    )
}
 
export default Example;