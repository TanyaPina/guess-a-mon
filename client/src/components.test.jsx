import Root from './components/pages/Root';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import GameContainer from './components/pages/GameContainer';
import MyNavBar from './components/Navbar';
import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
 
//TODO: tests if root renders - not working because of {user.name} being undefined
// test('Root renders correctly', () => {
//   render(<Root />);
//   expect(<Root/>).toBeDefined();
// });

//TODO: tests if root renders - not working because of {user.name} being undefined
// test('NavBar renders correctly', () => {
//   render(<MyNavBar />);
//   expect(<MyNavBar/>).toBeDefined();
// });


test('Home renders correctly', () => {
  render(<Home />);
  expect(<Home />).toBeDefined();
});


test('Game renders correctly', () => {
  render(<Game />);
  expect(<Game/>).toBeDefined();
});

//TODO: tests if GameContainer renders - failed because pokemonList is not iterable
// test('GameContainer renders correctly', () => {
//   render(<GameContainer />);
//   expect(<GameContainer/>).toBeDefined();
// });

test('Check for login button in home', () => {
    render(<Home/>);
    const button = screen.getByText('Log In');
    expect(button).toBeDefined();
});
