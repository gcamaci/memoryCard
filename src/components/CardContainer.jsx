import React, {useState, useEffect} from "react";
import { Card } from "./Card";

const Cardcontainer = ({ pokemon, score,usedCards,playRound }) => {
    useEffect(()=> {
        function shuffleCards() {
            
        }
        shuffleCards()
    },[score])
    return (
        <div className="flex flex-wrap">
            {pokemon.map((p) => (
                //can i just attatch onClick=playRound instead of passing as prop?
                 <Card key={p.id} name={p.name} imageUrl={p.imageUrl} playRound={playRound}/>
            ))}
        </div>
    )
}


export { Cardcontainer }