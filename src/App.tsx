import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { UserList } from './pages/UserList/UserList';
import { UserDetails } from './pages/UserDetails/UserDetails';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">User list</Link>
          </li>
          <li>
            <Link to="/123">User details</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/:userLogin">
            <UserDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
