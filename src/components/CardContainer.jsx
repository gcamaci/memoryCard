import React, {useState, useEffect} from "react";
import { Card } from "./Card";

const Cardcontainer = ({ pokemon, playRound }) => {
    return (
        <div className="flex flex-wrap">
            {pokemon.map((p) => (
                 <Card key={p.name} name={p.name} imageUrl={p.imageUrl} playRound={playRound}/>
            ))}
        </div>
    )
}


export { Cardcontainer }