import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Films from './components/Films';
import Planets from './components/Planets';
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';

function App() {
  return (
    <Router>
      <div className="App">
        <NavLink exact to='/'>Home</NavLink> ||
        <NavLink to='/films'>films</NavLink> || 
        <NavLink to='/planets'>planets</NavLink> ||
        <NavLink to='/species'>species</NavLink> ||
        <NavLink to='/starships'>starships</NavLink> ||
        <NavLink to='/vehicles'>vehicles</NavLink>
        {/* <h1>{Date.now()}</h1> */}
        <Switch>
          <Route path='/films'>
            <Films/>
          </Route>
          <Route path='/planets'>
            <Planets/>
          </Route>
          <Route exact path='/'>
            <h1>Home</h1>
          </Route>
          
          <Route>
            <h1>404</h1>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
