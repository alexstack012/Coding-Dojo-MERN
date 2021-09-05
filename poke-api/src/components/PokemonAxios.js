import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonAxios = (props) => {
    const [pokemon, setPokemon] = useState([])
    const btnClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => setPokemon(response.data.results));
    }
    return (
        <div>
            <button className="btn" onClick={btnClick} >Catch all the Pokemon using AXIOS!!!!!</button>
            {pokemon.map((poke, i) => {
                return (
                    <p key={i}>{poke.name}</p>
                )
            })}
        </div>
    )
}

export default PokemonAxios;