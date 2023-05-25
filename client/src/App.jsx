import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Root from './components/pages/Root';
import Home from './components/pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from "react-router-dom"; 
import Game from './components/pages/Game';
import ListFavorites from './components/pages/ListFavorites';
import { useEffect, useState } from 'react';



function App() {

  const { isAuthenticated, isLoading } = useAuth0();
  const [userObj, setUserObj] = useState(null);
  const [userFavorites, setUserFavorites] = useState([]);

//loads favorites if user exists
  const loadFavorites = async () => {
    if (userObj && userObj.email) {
      fetch(`/api/user/favorites/${userObj.email}`) 
        .then((response) => response.json())
        .then((data) => {
          setUserFavorites(data);
        });
    }
  };

  useEffect(() => {
    if (userObj) loadFavorites(); 
  }, [userObj]); 

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root setUserObj={setUserObj}/>}>
      <Route index element={<Game/>} />
      <Route path="favorites" element={<ListFavorites  setUserFavorites={setUserFavorites} userFavorites={userFavorites}/>}/>
      </Route>
    )
    )

  if (isLoading) return <div>Loading...</div>
  
  return (
    <div className="App">
      {!isAuthenticated ? <Home /> : <RouterProvider router={router}/>}      
    </div>
  );
}

export default App
