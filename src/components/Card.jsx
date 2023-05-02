import React from "react";


const Card = ({ name, imageUrl, playRound }) => {
   return (
    <div className="card w-1/4 shadow-xl" onClick={playRound}>
        <img src={imageUrl} alt={name}></img>
        <p>{name}</p>
    </div>
   )
}



export {Card}