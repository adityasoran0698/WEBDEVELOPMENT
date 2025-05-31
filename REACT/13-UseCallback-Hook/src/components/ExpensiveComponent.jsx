import React from 'react'
import { useState,useCallback } from "react";

const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [text, settext] = useState("");
    const previousref = useRef(null)
    const expensiveCalculation= useCallback (()=>{
        console.log("Expensive function is running")
        let result=0;
        for(let i=0;i<10000000;i++){
    result=result+i;
        }
        return result;
    },[count]);
    useEffect(() => {
      if(previousref.current===)
    }, [third])
    
  return (
    <div>
<input type="text"
value={text}
placeholder="Write Something"
onChange={(e)=>{settext(e.target.value)}}
 />
 <p>Expensive Calculation :{expensiveCalculation()}</p>
 <button onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default ExpensiveComponent