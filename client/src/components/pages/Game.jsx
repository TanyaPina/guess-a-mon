import React, { useState, useEffect } from 'react'
import dittoJson from "../../sampleresponse/ditto.json"

const Game = () => {

    const [pokemon, setPokemon] = useState(dittoJson);

    // const loadPokemon = () => {
    //     fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    //         .then((response) => response.json())
    //         .then((pokemon) => {
    //             setPokemon(pokemon);
    //         });
    // }

    // useEffect(() => {
    //     loadPokemon();
    // }, []);


    return (
        <div className="mybody">
            <div className="poketainer">
                <h2>Pokemon</h2>
                <p>The name of the pokemon is {pokemon.name}</p>
            </div>
        </div>
    );
}


export default Game