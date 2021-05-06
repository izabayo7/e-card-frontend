import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Dashboard from './pages/Dashboard'

function App() {
  return (
      <Router>
          <div>
              {/*<nav>*/}
              {/*  <ul>*/}
              {/*    <li>*/}
              {/*      <Link to="/">Home</Link>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <Link to="/about">About</Link>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <Link to="/users">Users</Link>*/}
              {/*    </li>*/}
              {/*  </ul>*/}
              {/*</nav>*/}

              <Switch>
                <Route path="/app">
                  <Dashboard />
                </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
