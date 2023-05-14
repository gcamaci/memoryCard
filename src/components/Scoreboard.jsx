import React from "react";
//we can bring in styled components for reusable components. 





const Scoreboard = ({score,record}) => {
    return (
        <div className="w-full border flex justify-center p-4">
            <div className="w-64 border bg-pokeLiteBlue p-1.5 rounded-md">
                <div className="bg-pokeYellow flex rounded-md">
                    <div className="grow flex flex-col items-center">
                        <p>Score</p>
                        <p>{score}</p>
                    </div>
                    <div className="grow flex flex-col items-center">
                        <p>Record</p>
                        <p>{record}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export {Scoreboard}

