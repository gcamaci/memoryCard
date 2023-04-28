import React, { useState } from "react";
const Main = () => {

    const [count,setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h1>hello</h1>
            <button onClick={handleClick}>Click me </button>
            <h1>{count}</h1>
        </div>
    )
}

export { Main }