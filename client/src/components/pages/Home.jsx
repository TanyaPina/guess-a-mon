import React from "react";
import { Container, Header } from 'semantic-ui-react'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Home = ({ setUserObj }) => {

    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    isAuthenticated && console.log(user.name);
    const sendUser = (user) => {
        fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({ user }),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => response.json()) //we want to get the response convert to json
            .then((data) => {
                //get that data and
                console.log(data);
            });
    };

    const handleLogin = async () => {
        await loginWithRedirect({
          appState: {
            returnTo: "/", //went to user profile before
          },
        });
        setUserObj(user); //// Pass the user object to setUserObj
        //Pass the user data to the target page using URL parameters
      };

    useEffect(() => {
        if (isAuthenticated) {
            setUserObj(user); // Set the user object after successful login
            sendUser(user);
        }
    }, [isAuthenticated, user, setUserObj]);

    return (
        <>
            <div
                style={{
                    backgroundImage: "url('http://localhost:5173/homeback.png')",
                    height: "100vh",
                    margin: "0px",
                    fontSize: '50px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    paddingTop: "10em",
                }}>
                <Container textAlign='center'
                style={{
                    backgroundColor: "white",
                }}>
                    <Header>Guess-a-mon</Header>
                    <p>You can catch 'em all, but can you guess them all?</p> 
                    <button class="login" style={{marginBottom:".5em"}} onClick={() => handleLogin() }>Log In</button>
                </Container>
            </div>

        </>
    );
};


export default Home