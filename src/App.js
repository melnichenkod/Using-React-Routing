import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './commons/Header';
import Films from './components/Films';
import Lists from './components/Lists';
import endpoints from './utils/endpoints';
import RouterHooksTest from './components/RouterHooksTest';
import {SingleFilm} from './components/SingleFilm';
function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route path='/films/:id'>
            <SingleFilm/>
          </Route>
          <Route path='/films'>
            <Films/>
          </Route>
          {/* {endpoints.map(({endpoint, keyToShow}) => (
            <Route key={endpoint} path={`/${endpoint}`}>
              <Lists endpoint={endpoint} keyToShow={keyToShow} />
            </Route>
          )) } */}
          {/* <Route path='/products/:id'>
            <RouterHooksTest/>
          </Route> */}
          {/* <Route path='/products/:id' component={RouterHooksTest} /> */}
        </Switch>
    </Router>
  );
}

export default App;
