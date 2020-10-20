import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { UserList } from './pages/UserList/UserList';
import { UserDetails } from './pages/UserDetails/UserDetails';

import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UserList />
        </Route>
        <Route path="/:userLogin">
          <UserDetails />
        </Route>
      </Switch>
    </Router>
  );
}
