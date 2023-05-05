import React from "react";
import { Container, Header } from 'semantic-ui-react'

const Home = () => {

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
                    

                </Container>
            </div>

        </>
    );
};


export default Home