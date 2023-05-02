import React, { useState, useEffect } from "react";
import { Cardcontainer } from "./CardContainer";
import { Scoreboard } from "./Scoreboard";
const Main = () => {

    const [score, setScore] = useState(0)
    const [record, setRecord] = useState(0)
    const [pokemon,setPokemon] = useState([])
    //Everytime score changes this is run 
    useEffect(() => {
        if (score > record) {
          setRecord(score);
        }
      }, [score, record]);
    
    useEffect(() => {
        async function fetchPokemon() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40');
            const data = await response.json();
            const pokemonData = await Promise.all(data.results.map(async (p) => {
                const response = await fetch(p.url);
                const data = await response.json();
                return {
                    name: p.name,
                    imageUrl: data.sprites.front_default
                };
            }));
            setPokemon(pokemonData);
        }
        fetchPokemon();
    }, []);

    const handleClick = () => {
        setScore(score + 1)
        
    }
    return (
        <div>
            <Scoreboard score={score} record={record}/>
            <Cardcontainer pokemon={pokemon} playRound={handleClick}/>



        </div>
    )
}

export { Main }