import React, { useState, useEffect } from 'react'
import { Container, Header } from 'semantic-ui-react'

const GameContainer = (pokemon) => {

    return (
        <Container textAlign='center'
        style={{
            backgroundColor: "white",
        }}>
           <p>Hello! The pokemon is {pokemon.pokemon.name}</p>
        </Container>
    );
}
export default GameContainer;