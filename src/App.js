import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './commons/Header';
import Lists from './components/Lists';
import endpoints from './utils/endpoints';
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
