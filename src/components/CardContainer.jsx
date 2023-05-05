import React, {useState, useEffect} from "react";
import { Card } from "./Card";


// need to split the array into 4 parts for 4 different rounds
const Cardcontainer = ({ pokemon, score, playRound }) => {
    const [displayPokemon, setDisplayPokemon] = useState([])
    const [cardSets, setCards] = useState([])
    useEffect(() => {
        function splitRounds(){
            const partSize = 12;
            const result = [];

            for (let i = 0; i < 4; i++) {
                const start = i * partSize;
                const end = start + partSize;
                const part = pokemon.slice(start,end);
                result.push(part)
            }
            setDisplayPokemon(result[0])
            return result
        }
        setCards(splitRounds())

    }, [pokemon])
    
    useEffect(() => {
        function shuffleCards() {
            for (let i = pokemon.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pokemon[i], pokemon[j]] = [pokemon[j], pokemon[i]];
            }
            setDisplayPokemon(pokemon.slice(0,12))
        }
        

        shuffleCards()
    },[score])
    return (
        <div className="flex flex-wrap">
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