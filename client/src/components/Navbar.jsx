import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/BlueTechtonicaWord.png'
import { Button } from 'semantic-ui-react';
import { useAuth0 } from '@auth0/auth0-react';

function MyNavBar(props) {

  const { logout, isAuthenticated, user} = useAuth0();
  
  return (
    <>
    <Navbar data-testid="navbar" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
             <a href="#login" style={{marginRight: "20px"}}>Welcome, {user.name}</a>
            {isAuthenticated && (<Button inverted onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
              </Button>)}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNavBar;