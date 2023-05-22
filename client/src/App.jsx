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

  const { isAuthenticated, isLoading, user} = useAuth0();
  const [userObj, setUserObj] = useState(null);
  const [userFavorites, setUserFavorites] = useState([]);

  const loadFavorites = async () => {
    if (userObj && userObj.email) {
      //created a function that will get a list of products from a server using the 'fetch'
      //pass in products as a prop
      // A function to fetch the list of products that will be load anytime that list change
      fetch(`/api/user/favorites/${userObj.email}`) //changed this for proxy
        .then((response) => response.json())
        .then((data) => {
          console.log(
            "from the code in the backend from fetch userObj",
            userObj
          );
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
