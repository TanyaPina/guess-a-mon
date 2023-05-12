import React, { useState, useEffect } from 'react'
import { Container, Header } from 'semantic-ui-react'

const GameContainer = ({pokemon}) => {

    // const pokemonSprite = (pokemon) =>{
    //     return '{pokemon.pokemon.sprites.back_default}'
    // }


    return (
        <Container textAlign='center'
        style={{
            backgroundColor: "white",
        }}>
           <p>Hello! The pokemon is {pokemon.name}</p>
           <img src={pokemon.sprites.front_default}/>
           
        </Container>
    );
}
export default GameContainer;