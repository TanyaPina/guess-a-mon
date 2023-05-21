import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Root from './components/pages/Root';
import Home from './components/pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom"; 
import Game from './components/pages/Game';
import { useState } from 'react';



function App() {

  const { isAuthenticated, isLoading, user} = useAuth0();
  const [userObj, setUserObj] = useState(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Game/>} />
      <Route path="favorites" element={<div>Favorites</div>}/>
      </Route>
    )
    )

  if (isLoading) return <div>Loading...</div>
  
  return (
    <div className="App">
      {!isAuthenticated ? <Home setUserObj={setUserObj}/> : <RouterProvider router={router}/>}      
    </div>
  );
}

export default App
