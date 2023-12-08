import React from "react";

import useCustomHook from "./useCustomHook";

function TestComponent(props){
    const clickedButton = useCustomHook(0,"TestComponent");
    return(
        <div>
            <h2> This is Test compenemt</h2>
            <button onClick={clickedButton}>+</button>
        </div>
    )
}

export default TestComponent;