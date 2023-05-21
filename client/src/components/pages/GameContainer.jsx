import React, { useState, useEffect } from 'react'
import { Button, Container } from 'semantic-ui-react'

const GameContainer = ({ pokemonList, shufflePokemonList }) => {

    const [fourPokemon, setFourPokemon] = useState([]);
    const [correctOption, setCorrectOption] = useState({});
    const [answered, setAnswered] = useState(false);
    const [styledImage, setStyledImage] = useState({ filter: "brightness(0)", });
    const [correctUrl, setCorrectUrl] = useState("");

    useEffect(() => {
        setFourPokemon([...pokemonList].splice(0, 4));
    }, [pokemonList]);

    useEffect(() => {
        setCorrectOption(fourPokemon[Math.floor(Math.random() * fourPokemon.length)]);
    }, [fourPokemon])

    useEffect(() => {
        const pokeNumber = correctOption?.url ? getPokeNumber(correctOption.url) : 214;
        getCorrectImage(pokeNumber);
    }, [correctOption])

    const getPokeNumber = (url) => {
        const numberRegEx = /(\d+)\/$/;
        return ((url.match(numberRegEx) || [])[1]);
    }

    const getCorrectImage = (number) =>
        setCorrectUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`);

    const handleAnswerClick = (selectedName) => {
        setAnswered(true);
        setStyledImage({
            filter: null,
        })
        if (correctOption.name === selectedName) {
        } else {
        }
    }

    const handleShuffleClick = () => {
        setAnswered(false);
        setStyledImage({ filter: "brightness(0)" });
        shufflePokemonList(pokemonList);
    }

    return (
        <Container textAlign='center'
            style={{
                backgroundColor: "white",
            }}>
            <img className="pokeimage" src={correctUrl} style={styledImage} />
            <p><Button onClick={handleShuffleClick}> Shuffle </Button></p>
            {fourPokemon.length >= 4 && <div>
                <Button disabled={answered} onClick={() => { handleAnswerClick(fourPokemon[0].name) }}>{fourPokemon[0].name} </Button>
                <Button disabled={answered} onClick={() => { handleAnswerClick(fourPokemon[1].name) }}>{fourPokemon[1].name} </Button>
                <Button disabled={answered} onClick={() => { handleAnswerClick(fourPokemon[2].name) }}>{fourPokemon[2].name} </Button>
                <Button disabled={answered} onClick={() => { handleAnswerClick(fourPokemon[3].name) }}>{fourPokemon[3].name} </Button>
                {/* the following is for testing :  <p>Hello! The correct pokemon is {correctOption?.name}</p> */}
            </div>
            }
        </Container>
    );
}
export default GameContainer;