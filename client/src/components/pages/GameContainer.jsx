import React, { useState, useEffect } from 'react'
import { Button, Container, Header } from 'semantic-ui-react'

const GameContainer = ({pokemonList, shufflePokemonList}) => {

const [fourPokemon, setFourPokemon] = useState([]);
    // const pokemonSprite = (pokemon) =>{
    //     return '{pokemon.pokemon.sprites.back_default}'
    // }

    const getFourPokemon = (shuffled) => {
        let fourPokeArr = [...shuffled];
        // const fourPokemonResult = shuffled.splice(0,4);
        // setFourPokemon(fourPokemonResult);
        setFourPokemon(fourPokeArr.splice(0,4));
    }

    useEffect(() => {
        console.log("we are here" , pokemonList);
        getFourPokemon(pokemonList);
    }, [pokemonList]);
    

    const correctOption = fourPokemon[Math.floor(Math.random() * fourPokemon.length)];

    return (
        <Container textAlign='center'
        style={{
            backgroundColor: "white",
        }}>
           {/* <p>Hello! The pokemon is {pokemon.name}</p> */}
           {/* { pokemonList.length == 0 ? null : <p>Hello this is my pokemon {pokemonList[0].name} </p> } */}
           {/* <img src={pokemonList.sprites.front_default}/> */}
           
           <p><Button onClick={()=>{shufflePokemonList(pokemonList)}}> Shuffle </Button></p>
           {fourPokemon.length >= 4 && <div>
           <Button> {fourPokemon[0].name} </Button>
           <Button> {fourPokemon[1].name} </Button>
           <Button> {fourPokemon[2].name} </Button>
           <Button> {fourPokemon[3].name} </Button>
           <p>Hello! The correct pokemon is {correctOption.name}</p>
           </div>
}
        </Container>
    );
}
export default GameContainer;