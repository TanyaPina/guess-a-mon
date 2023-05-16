import React, { useState, useEffect } from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

const GameContainer = ({pokemonList, shuffledPokemonList}) => {

    // const [fourPokemon, setFourPokemon] = useState();
    let fourPokemon = [];
    // const pokemonSprite = (pokemon) =>{
    //     return '{pokemon.pokemon.sprites.back_default}'
    // }



    if (pokemonList.length == 0) return null ;

    const getFourPokemon = (shuffled) => {
        // const fourPokemonResult = shuffled.splice(0,4);
        // setFourPokemon(fourPokemonResult);
        fourPokemon = shuffled.splice(0,4);
    }

    getFourPokemon(pokemonList);

    const correctOption = fourPokemon[Math.floor(Math.random() * fourPokemon.length)];

    // const shuffledPokemonList = (pokemonListParam) => {
    //     //setIsLoading(true);
    //     const shuffled = pokemonListParam
    //         .map(value => ({ value, sort: Math.random() }))
    //         .sort((a, b) => a.sort - b.sort)
    //         .map(({ value }) => value);

    return (
        <Container textAlign='center'
        style={{
            backgroundColor: "white",
        }}>
           {/* <p>Hello! The pokemon is {pokemon.name}</p> */}
           {/* { pokemonList.length == 0 ? null : <p>Hello this is my pokemon {pokemonList[0].name} </p> } */}
           {/* <img src={pokemonList.sprites.front_default}/> */}
           <p><Button onClick={()=>{shuffledPokemonList(pokemonList)}}> Shuffle </Button></p>
           <Button onClick={()=>{shuffledPokemonList(pokemonList)}}> {fourPokemon[0].name} </Button>
           <Button onClick={()=>{shuffledPokemonList(pokemonList)}}> {fourPokemon[1].name} </Button>
           <Button onClick={()=>{shuffledPokemonList(pokemonList)}}> {fourPokemon[2].name}</Button>
           <Button onClick={()=>{shuffledPokemonList(pokemonList)}}> {fourPokemon[3].name}</Button>
           <p>Hello! The correct pokemon is {correctOption.name}</p>
        </Container>
    );
}
export default GameContainer;