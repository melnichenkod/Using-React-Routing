import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './commons/Header';
import Lists from './components/Lists';
import endpoints from './utils/endpoints';
import RouterHooksTest from './components/RouterHooksTest';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          {endpoints.map(({endpoint, keyToShow}) => (
            <Route key={endpoint} path={`/${endpoint}`}>
              <Lists endpoint={endpoint} keyToShow={keyToShow} />
            </Route>
          )) }
          <Route path='/products/:id'>
            <RouterHooksTest/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
