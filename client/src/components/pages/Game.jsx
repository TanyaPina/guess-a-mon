import React, { useState, useEffect } from 'react'
import dittoJson from "../../sampleresponse/ditto.json"
import GameContainer from './GameContainer';
import firstfifteenJson from "../../sampleresponse/firstfifteen.json"

const Game = () => {

    //const [pokemon, setPokemon] = useState(dittoJson);
    const [pokemonList, setPokemonList] = useState([]);
    //const [isLoading, setIsLoading] = useState(false);
    
  
    const getPokemonList = () => {
        console.log("calling api")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
            .then((response) => response.json())
            .then((pokemonListResponse) => {
                console.log("calling api response", pokemonListResponse)
                shuffledPokemonList(pokemonListResponse.results);
            });
    }

    const shuffledPokemonList = (pokemonListParam) => {
        //setIsLoading(true);
        const shuffled = pokemonListParam
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        setPokemonList(shuffled);
        getFourPokemon(shuffled);
        //setIsLoading(true);
        console.log("line34", pokemonList);
        //setIsLoading(false);
    }


    useEffect(() => {
        getPokemonList();
        // shuffledPokemonList();
        console.log("line40", pokemonList);
    }, []);


    return (
        <div className="mybody">
            <div className="poketainer">
                {/* <h2>Pokemon {pokemon.name}</h2>
                // <GameContainer pokemon={pokemon}/> */}
                     {/* <p>Hello this is my pokemon {pokemonList[0]?.name}</p> */}
                     { pokemonList.length == 0 ? null : <p>Hello this is my pokemon {pokemonList[0].name} </p> }
                     <GameContainer pokemonList={pokemonList} shuffledPokemonList={shuffledPokemonList}/>
            </div>
        </div>
    );
}


export default Game