import React from "react";

const Scoreboard = ({score,record}) => {


    return (
        <div>
            <h1>{score}</h1>
            <h1>{record}</h1>
        </div>
    )
}


export {Scoreboard}

