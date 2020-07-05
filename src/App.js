import React from 'react';
import './App.css';
import TestListShell from './containers/TestListShell/index';
import AddTestShell from './containers/AddTestShell/index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TestListShell />
        </Route>
        <Route exact path="/addTest">
          <AddTestShell />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
