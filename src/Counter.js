import {useState, useEffect} from "react"

function Counter(){
    const [count,setCount]=useState(0);
        
    useEffect(() => {
        console.log(count)
   
}, [count])

    return(
        <>
        <button onClick={()=>setCount(count+1)}>Click Me!</button>
        <p>{count}</p>
        </>
    )
}
export default Counter;
