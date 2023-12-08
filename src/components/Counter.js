import React, { useEffect, useState } from "react";

function Counter(){
    // hook: useState and useEffect
    const [count,setCount] = useState(0);

    useEffect( () => {
        document.title = `You Clicked ${count} times `;
    })
    return(
        <>
         <h2> You Clicked {count} times </h2>
         <button onClick={() => setCount(count + 1)}>
            Click Me
         </button>
        </>
    )
}

export default Counter