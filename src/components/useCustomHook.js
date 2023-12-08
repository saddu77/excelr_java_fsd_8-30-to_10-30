import { useEffect, useState } from "react";

function useCustomHook(initializer,componentName){
    const [counter,setCounter] = useState(initializer);

    function resetCounter(){
        setCounter(counter + 1);
    }
    useEffect( () => {
        console.log("Button of the " + componentName + " is clicked " + counter + " times.");        
    }, [counter, componentName]);

    return resetCounter;
}

export default useCustomHook;