import React,{useState,useEffect} from 'react';




const Products = (props)=>{

  const [count,setCount] = useState(0);

  
  useEffect(()=>{
console.log(props.name,"nameee");
  },[count])
  

const clickPlus=(e)=>{
  setCount(count+1);
}
const clickMinus=(e)=>{
  setCount(count-1);
}
const clearData=(e)=>{
  setCount(0);
    // alert("hello");

}
    return(
        <div>
          <div class="row">
          <div class="col-sm-5 white"></div>
          <div class="col-sm-1 white"><button onClick={clickPlus} type="button" class="btn btn-dark">+</button></div>
          <div class="col-sm-1 white"><button  onClick={clickMinus} type="button" class="btn btn-dark">-</button></div>
          <div class="col-sm-5 white"><button onClick={clearData} type="button" class="btn btn-dark">clear</button></div>
          </div>

          <div>
           <h1> {count} </h1>
           <h3>{props.name}</h3>
          </div>
          
        </div>
    )
}


export default Products;