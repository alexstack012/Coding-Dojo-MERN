import React, { useState } from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Error from './components/Error';
import Search from './components/Search';
import Result from './components/Result';

function App() {
  const [name, setName] = useState("")
  const [display, setDisplay] = useState({})
  const [homeworld, setHomeworld] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Luke API-Walker</h1>
        <Switch>

          <Route exact path="/">
            <Search />
          </Route>

          <Route path="/Error">
            <Error />
          </Route>

          <Route path="/:categoryTerm/:id">
            <Result/>
          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
