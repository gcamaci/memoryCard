import React, {useState, useEffect} from "react";


const Cardcontainer = ({ pokemon }) => {
    return (
        <div className="flex">
            {pokemon.map((p) => (
                <div key={p.name}>
                    <img src={p.imageUrl} alt={p.name}></img>
                    <p>{p.name}</p>
                </div>
            ))}
        </div>
    )
}


export { Cardcontainer }