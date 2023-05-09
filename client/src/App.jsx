import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Root from './components/pages/Root';
import Home from './components/pages/Home';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isAuthenticated, isLoading} = useAuth0();

  if (isLoading) return <div>Loading...</div>
  
  return (
    <div className="App">
      {!isAuthenticated ? <Home/> : <Root/>}
    </div>
  );
}

export default App
