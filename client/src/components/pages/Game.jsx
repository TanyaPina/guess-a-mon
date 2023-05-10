import React, { useState, useEffect } from 'react'
import dittoJson from "../../sampleresponse/ditto.json"
import GameContainer from './GameContainer';

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
                <h2>Pokemon {pokemon.name}</h2>
                <GameContainer pokemon={pokemon}/>
            </div>
        </div>
    );
}


export default Game