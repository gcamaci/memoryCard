import React from "react";


const Card = ({ name, imageUrl, id,playRound }) => {
   return (
    //Assumming always unique. Set id instead of using card key for usedCards? 
    <div className="card w-1/4 shadow-xl" onClick={playRound} id={id}>
        <img src={imageUrl} alt={name} style={{ pointerEvents: 'none' }}></img>
        <p>{name}</p>
    </div>
   )
}



export {Card}