import React from "react";
//we can bring in styled components for reusable components. 





const Scoreboard = ({score,record}) => {
    return (
        <div className="w-full flex justify-center p-4">
            <div className="w-64 bg-pokeLiteBlue p-1.5 rounded-md shadow shadow-black">
                <div className="bg-pokeYellow flex rounded-md shadow-inner">
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

