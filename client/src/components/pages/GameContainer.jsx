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

    const { user } = useAuth0();

    //selects four pokemon from our list
    useEffect(() => {
        setFourPokemon([...pokemonList].splice(0, 4));
    }, [pokemonList]);

    //selects a random pokemon from our four to be the correct option
    useEffect(() => {
        setCorrectOption(fourPokemon[Math.floor(Math.random() * fourPokemon.length)]);
    }, [fourPokemon])

    //calls the getPokemonNumber function
    useEffect(() => {
        const pokeNumber = correctOption?.url ? getPokeNumber(correctOption.url) : 132;
        getCorrectImage(pokeNumber);
    }, [correctOption])

    //extracts the pokemon number from the url of the correct option 
    const getPokeNumber = (url) => {
        const numberRegEx = /(\d+)\/$/;
        return ((url.match(numberRegEx) || [])[1]);
    }

    //gets the image of the pokemon using the pokemon number
    const getCorrectImage = (number) =>
        setCorrectUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`);

    //reveals pokemon and sets correct option state to true or false, depending on which option the user selected        
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

    //reshuffles the pokemon, hides it and sets answered,wrong option, and correct option state to false
    const handleShuffleClick = () => {
        setAnswered(false);
        setStyledImage({ filter: "brightness(0)" });
        shufflePokemonList(pokemonList);
        setChoseWrongOption(false);
        setChoseCorrectOption(false);
    }

    // adds pokemon to the user's favorites and then calls the handleShuffleClick function
    const handleFavorite = () => {
        const number = getPokeNumber(correctOption.url);
        fetch(`/api/addFavorite/${number}/${user.email}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json());
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
                    {fourPokemon.map((pokemon) => {
                        return <Button disabled={answered} onClick={() => { handleAnswerClick(pokemon.name) }}>{pokemon.name} </Button>
                    })}
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