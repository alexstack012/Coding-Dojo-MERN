import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([])
    const btnClick = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }
    return (
        <div>
            <button className="btn" onClick={btnClick}>Gotta catch them all!</button>
            {pokemon.map((poke, i) => {
                return (
                    <p key={i}>{poke.name}</p>
                )
            })}
        </div>
    )
}
export default Pokemon