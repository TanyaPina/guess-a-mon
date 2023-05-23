import React, { useState, useEffect } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { useAuth0 } from "@auth0/auth0-react";

const GameContainer = ({ pokemonList, shufflePokemonList }) => {

    const [fourPokemon, setFourPokemon] = useState([]);
    const [correctOption, setCorrectOption] = useState({});
    const [answered, setAnswered] = useState(false);
    const [styledImage, setStyledImage] = useState({ filter: "brightness(0)", });
    const [correctUrl, setCorrectUrl] = useState("");
    const [choseCorrectOption, setChoseCorrectOption] = useState(false);
    const [choseWrongOption, setChoseWrongOption] = useState(false);

    const { isAuthenticated, user } = useAuth0();


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
            setChoseCorrectOption(true);
        } else {
            setChoseWrongOption(true);
        }
    }

    const handleShuffleClick = () => {
        setAnswered(false);
        setStyledImage({ filter: "brightness(0)" });
        shufflePokemonList(pokemonList);
        setChoseWrongOption(false);
    }

    const handleFavorite = () => {
        const number = getPokeNumber(correctOption.url);
        fetch(`/api/addFavorite/${number}/${user.email}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
            setChoseCorrectOption(false);
            handleShuffleClick();
    };

    return (
        <>
            <Container textAlign='center'
                style={{
                    backgroundColor: "white",
                }}>
                <img src={correctUrl} style={styledImage} />
                <p><Button onClick={handleShuffleClick}> Shuffle </Button></p>
                {fourPokemon.length >= 4 && <div>
                    <Button disabled={answered} onClick={() => { handleAnswerClick(fourPokemon[0].name) }}>{fourPokemon[0].name} </Button>
                    <Button disabled={answered} onClick={() => { handleAnswerClick(fourPokemon[1].name) }}>{fourPokemon[1].name} </Button>
                    <Button disabled={answered} onClick={() => { handleAnswerClick(fourPokemon[2].name) }}>{fourPokemon[2].name} </Button>
                    <Button disabled={answered} onClick={() => { handleAnswerClick(fourPokemon[3].name) }}>{fourPokemon[3].name} </Button>
                    {/* the following is for testing :  <p>Hello! The correct pokemon is {correctOption?.name}</p> */}
                    {choseCorrectOption &&
                          <p>Congratulations, you guessed the Pokémon right!
                            <div><Button style={{ marginTop: "1em", marginBottom: "1em" }} onClick={handleFavorite}> Favorite </Button></div></p>}
                </div>
                }
                     {choseWrongOption && <p>Oops, wrong Pokémon! Try again.</p>}
            </Container>
        </>
    );
}
export default GameContainer;