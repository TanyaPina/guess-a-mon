import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/pages/Root';
import Home from './components/pages/Home';
import { useAuth0 } from '@auth0/auth0-react';
/*
const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
},
]);


function App(){
  return <RouterProvider router={router}/>;
}
*/
function App() {

  const { isAuthenticated} = useAuth0();

  return (
    <div className="App">
      {/* {user ? <Root/> : <Home/>} */}
      {!isAuthenticated ? <Home/> : <Root/>}
      {/* <Home /> */}
      {/* <Root/> */}
    </div>
  );
}


export default App
