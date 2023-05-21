import React, { useState, useEffect } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { useAuth0 } from "@auth0/auth0-react";

const GameContainer = ({ pokemonList, shufflePokemonList, setUserObj}) => {

    const [fourPokemon, setFourPokemon] = useState([]);
    const [correctOption, setCorrectOption] = useState({});
    const [answered, setAnswered] = useState(false);
    const [styledImage, setStyledImage] = useState({ filter: "brightness(0)", });
    const [correctUrl, setCorrectUrl] = useState("");

    const { isAuthenticated, user } = useAuth0();
    const [userObj, setUserObj] = useState(null);

    console.log("gamecont", user,isAuthenticated);
    
    const sendUser = (user) => {
        //passes state variable to body
        fetch("/api/users", {
          //matches the route in the backend
          //, it sends a POST request to the "/api/user" endpoint with the user data in the request body.
          //{user:user}, changed this for proxy
          method: "POST", //post method to add resource to db
          body: JSON.stringify({ user }), //stringifying the user obj, body is set to a JSON-encoded string containing the user data.
          headers: {
            "Content-type": "application/json", //The headers are set to indicate that the content type of the request is JSON.
          },
        })
          .then((response) => response.json()) //we want to get the response convert to json
          .then((data) => {
            //get that data and
            console.log(data);
          });
      };
            
      useEffect(() => {
        if (isAuthenticated) {
        setUserObj(user);
          sendUser(user);
        }
      }, [isAuthenticated, user, setUserObj]);

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
        setUserObj(user);
        sendUser(user);
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
            <img src={correctUrl} style={styledImage} />
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