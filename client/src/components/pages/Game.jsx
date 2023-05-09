import React, { useState } from 'react'

const Game = () => {

    const [pokemon, setPokemon] = useState([]);

    const loadPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response) => response.json())
        .then((pokemon) => {
            setPokemon(pokemon);
        });
    }

     return (
       <div className="mybody">
        <h2>Hello</h2>
       </div>
     );
}


export default Game