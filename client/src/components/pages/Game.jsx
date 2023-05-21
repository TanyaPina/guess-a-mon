import React, { useState, useEffect } from 'react'
import GameContainer from './GameContainer';
import firstFifteenJson from "../../sampleresponse/firstfifteen.json"
import ListStudents from '../ListStudents';

const Game = () => {

    const [pokemonList, setPokemonList] = useState([]);

    //the following is for the api call:
    // const getPokemonList = () => {
    //     console.log("calling api")
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    //         .then((response) => response.json())
    //         .then((pokemonListResponse) => {
    //             console.log("calling api response", pokemonListResponse)
    //             shuffledPokemonList(pokemonListResponse.results);
    //         });
    // }

    const getPokemonList = () => {
        shuffledPokemonList(firstFifteenJson.results);
    }

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
                <ListStudents/>
            </div>
        </div>
    );
}


export default Game