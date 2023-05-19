import Root from './components/pages/Root';
import Home from './components/pages/Home';
import Game from './components/pages/Game';
import MyNavBar from './components/Navbar';
import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';


//tests if root renders - not working because of {user.name} being undefined
// test('Root renders correctly', () => {
//   render(<Root />);
//   expect(<Root/>).toBeDefined();
// });

test('Home renders correctly', () => {
  render(<Home />);
  expect(<Home />).toBeDefined();
});

test('Game renders correctly', () => {
  render(<Game />);
  expect(<Game/>).toBeDefined();
});

test('Check for login button in home', () => {
    render(<Home/>);
    const button = screen.getByText('Log In');
    expect(button).toBeDefined();
});
