import React, { useState, useEffect } from 'react'
import GameContainer from './GameContainer';

const Game = () => {

    const [pokemonList, setPokemonList] = useState([]);


    //calls the api and the shuffledPokemonList function
    const getPokemonList = () => {
        console.log("calling api")
        fetch('/api/pokemonlist')
            .then((response) => response.json())
            .then((pokelist) => {
                shuffledPokemonList(pokelist)
            });
    }

    //shuffles the list of pokemon that we get from the api, returning a randomly shuffled array
    const shuffledPokemonList = (pokemonListParam) => {
        const shuffled = pokemonListParam
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        setPokemonList(shuffled);
    }


    useEffect(() => {
        getPokemonList();
    }, []);


    return (
        <div className="mybody">
            <div className="poketainer">
                <GameContainer pokemonList={pokemonList} shufflePokemonList={shuffledPokemonList} />
            </div>
        </div>
    );
}


export default Game