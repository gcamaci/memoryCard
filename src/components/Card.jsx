import React from "react";


const Card = ({ name, imageUrl, id, playRound}) => {
   return (
    //playround function only works when passed as prop through card and not on creation?
    <div className="border border-4 border-pokeLiteBlue bg-pokeYellow rounded p-1" id={id} onClick={playRound}>
        <img src={imageUrl} alt={name} style={{ pointerEvents: 'none' }}></img>
        <p>{name}</p>
    </div>
   )
}



export {Card}