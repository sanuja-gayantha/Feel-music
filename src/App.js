import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// custom imports
import Home from './pages/Home';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
