import React, { Component, FunctionComponent } from 'react';
import { HashRouter, Switch, Route, match } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

interface DetailMatchParams {
  id: string;
}

interface DetailProps {
  match: match<DetailMatchParams>
}

const Detail: FunctionComponent<DetailProps> = ({ match }) => (
  <>id: {match.params.id}</>
);

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <div className="_RoutingArea">
            <Switch>
              <Route exact path="/" component={() => <>Top!</>} />
              <Route path="/detail/:id" component={Detail} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
