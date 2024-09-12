'use client';
import { useState } from "react";

function Index(){
    const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count + 1)
    }
    
    return(
        <button onClick={handleClick}>Press me with {count} times</button>
    );
}

export default Index;