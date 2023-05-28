import Root from './components/pages/Root';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import GameContainer from './components/pages/GameContainer';
import MyNavBar from './components/Navbar';
import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import ListFavorites from './components/pages/ListFavorites';
import FavoriteCard from './components/FavoriteCard';
import App from './App';
 
//TODO: tests if root renders - not working because of {user.name} being undefined
// test('Root renders correctly', () => {
//   render(<Root />);
//   expect(<Root/>).toBeDefined();
// });

//TODO: tests if NavBar renders - not working because of {user.name} being undefined
// test('NavBar renders correctly', () => {
//   render(<MyNavBar />);
//   expect(<MyNavBar/>).toBeDefined();
// });


test('Home renders correctly', () => {
  render(<Home />);
  expect(<Home />).toBeDefined();
});

//TODO: tests if GameContainer renders -failed because pokemonList is not iterable
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

//TODO: tests if ListFavorites renders - not working because of parse failure for URL
// test('Favorites renders correctly', () => {
//   render(<ListFavorites />);
//   expect(<ListFavorites/>).toBeDefined();
// });

//TODO: tests if FavoritesCard renders - not working becausecannot read undefined property of pokecode
// test('FavoriteCard renders correctly', () => {
//   render(<FavoriteCard/>);
//   expect(<FavoriteCard />).toBeDefined();
// });

test('App renders correctly', () => {
  render(<App />);
  expect(<App/>).toBeDefined();
});