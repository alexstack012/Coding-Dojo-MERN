import React from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/people/">
            <Main />
          </Route>

          <Route exact path="/people/:id" >
            <Detail />
          </Route>

          <Route exact path="/people/:id/edit">
            <Update />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;