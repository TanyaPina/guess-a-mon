import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/Navbar'
import ListStudents from './components/ListStudents'
import Home from './components/pages/Home';


function App() {

  return (
    <div className="App">
      <MyNavBar />
      <ListStudents />
      <Home/>
    </div>
  )
}

export default App
