import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './components/pages/Root';
import Home from './components/pages/Home';


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root />,
},
]);


function App(){
  return <RouterProvider router={router}/>;
}
/*
function App() {

  return (
    <div className="App">
      <MyNavBar />
      <ListStudents />
      <Home/>
    </div>
  )
}
*/

export default App
