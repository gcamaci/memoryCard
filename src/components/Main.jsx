import React, { useState, useEffect } from "react";
import { Cardcontainer } from "./CardContainer";
import { Scoreboard } from "./Scoreboard";
import splitRounds from "../utils/splitRounds";


const Main = () => {
    const [score, setScore] = useState(0)
    const [record, setRecord] = useState(0)
    const [pokemon,setPokemon] = useState([])
    const [usedPokemon,setUsedPokemon] = useState([])
    const [round, setRound] = useState(0)
 
    useEffect(() => {
        if (score > record) {
          setRecord(score);
        }
        if(score % 12 === 0) {
            const currentRound = parseInt(score.toString().split('')[0]);
            setRound(currentRound)
        }
    }, [score, record]);
    
    useEffect(() => {
        async function fetchPokemon() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=48');
            //data contains all pokemon, just name and URL
            const data = await response.json();
            //looping through those pokemon and fetching data from individual URLs
            const pokemonData = await Promise.all(data.results.map(async (p) => {
                const response = await fetch(p.url);
                const data = await response.json();
                
                return {
                    id:data.id,
                    name: p.name,
                    imageUrl: data.sprites.front_default
                };
            }));
        const cardSets = splitRounds(pokemonData)
        setPokemon(cardSets);
    }
        fetchPokemon();
    }, []);

    

    const playRound = (e) => {
        const pokeID = e.currentTarget.id
        setScore(score + 1)

        if (usedPokemon.includes(pokeID)) {
            setScore(0)
            setUsedPokemon([])
        } else {
            setUsedPokemon((usedPokemon) => {
                const updatedUsedPokemon = [...usedPokemon, pokeID]
                setScore(score + 1)
                return updatedUsedPokemon
            })
        }
    }
    
    return (
        <div>
            <Scoreboard score={score} record={record}/>
            <Cardcontainer 
                pokemon={pokemon} 
                score={score} 
                round={round} 
                playRound={playRound}/>
        </div>
    )
}

export { Main }