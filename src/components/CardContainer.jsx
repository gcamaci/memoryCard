import React, {useState, useEffect} from "react";
import shuffleCards from "../utils/shuffleCards";
import { Card } from "./Card";


// need to split the array into 4 parts for 4 different rounds
const Cardcontainer = ({ pokemon, score, round, playRound }) => {
    const [displayPokemon, setDisplayPokemon] = useState([])
    
    
    useEffect(() => {
        if (pokemon && pokemon.length > 0){
            const displayList = shuffleCards(pokemon[round])
            setDisplayPokemon(displayList) 
        }
    },[pokemon,score,round])

    return (
        <div className="grid grid-cols-4 gap-5 p-10">
            {displayPokemon.map((p) => (
                //can i just attatch onClick=playRound instead of passing as prop?
                 <Card 
                    key={p.id} 
                    id={p.id} 
                    name={p.name} 
                    imageUrl={p.imageUrl} 
                    playRound={playRound}
                />
            ))}
        </div>
    )
}


export { Cardcontainer }