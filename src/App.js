import './App.css';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Header from './commons/Header';
import Lists from './components/Lists';
function App() {
  return (
    <Router>
      <div className="App">

        <Header/>
        {/* <h1>{Date.now()}</h1> */}
        <Switch>
          <Route path='/films'>
            <Lists endpoint='films' keyToShow='title'/>
          </Route>
          <Route path='/people'>
            <Lists endpoint='people' keyToShow='name'/>
          </Route>
          <Route path='/planets'>
            <Lists endpoint='planets' keyToShow='name'/>
          </Route>
          <Route path='/species'>
            <Lists endpoint='species' keyToShow='name'/>
          </Route>
          <Route path='/starships'>
            <Lists endpoint='starships' keyToShow='name'/>
          </Route>
          <Route path='/vehicles'>
            <Lists endpoint='vehicles' keyToShow='name'/>
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
