import React, { useState, useEffect } from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

const GameContainer = ({pokemonList, shufflePokemonList}) => {

// const [fourPokemon, setFourPokemon] = useState([]);
const [correctPokemonNum, setCorrectPokemon] = useState([]);
    // const pokemonSprite = (pokemon) =>{
    //     return '{pokemon.pokemon.sprites.back_default}'
    // }
    if (pokemonList.length == 0 ) return null;
    const getFourPokemon = (shuffled) => {
        let fourPokeArr = [...shuffled];
        // const fourPokemonResult = shuffled.splice(0,4);
        // setFourPokemon(fourPokemonResult);
        setFourPokemon(fourPokeArr.splice(0,4));
    }

    // useEffect(() => {
    //     console.log("we are here" , pokemonList);
    //     getFourPokemon(pokemonList);
    // }, [pokemonList]);
    const fourPokemon = [...pokemonList].splice(0,4);

    const correctOption = fourPokemon[Math.floor(Math.random() * fourPokemon.length)];
    console.log("line26", correctOption);

    const getPokeNumber = (url) => {
        let correctOptionNum = correctOption.url
        const numberRegEx = /(\d+)\/$/;
        return ((correctOptionNum.match(numberRegEx) || [])[1]);
    } 

    {correctOption && getPokeNumber()}

    const getCorrectImage = () => {
        const number = getPokeNumber(correctOption.url);
        let correctUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
        return correctUrl;
    }

    const correctUrl = getCorrectImage();
    
    const chooseCorrectOption = (selectedName) => {
        if (correctOption.name === selectedName){
            console.log(" you guessed correct!")
        } else {
        console.log("wrong");
    }
    }

    {correctOption && getCorrectImage()}
    return (
        <Container textAlign='center'
        style={{
            backgroundColor: "white",
        }}>
           {/* <p>Hello! The pokemon is {pokemon.name}</p> */}
           {/* { pokemonList.length == 0 ? null : <p>Hello this is my pokemon {pokemonList[0].name} </p> } */}
           {/* <img src={pokemonList.sprites.front_default}/> */}
           <img src={correctUrl}/> 
           <p><Button onClick={()=>{shufflePokemonList(pokemonList)}}> Shuffle </Button></p>
           {fourPokemon.length >= 4 && <div>
           <Button onClick={()=>{chooseCorrectOption(fourPokemon[0].name)}}>{fourPokemon[0].name} </Button>
           <Button onClick={()=>{chooseCorrectOption(fourPokemon[1].name)}}>{fourPokemon[1].name} </Button>
           <Button onClick={()=>{chooseCorrectOption(fourPokemon[2].name)}}>{fourPokemon[2].name} </Button>
           <Button onClick={()=>{chooseCorrectOption(fourPokemon[3].name)}}>{fourPokemon[3].name} </Button>
           <p>Hello! The correct pokemon is {correctOption.name}</p>
           </div>
}
        </Container>
    );
}
export default GameContainer;