import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">User list</Link>
          </li>
          <li>
            <Link to="/123">User list</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <UserList />
          </Route>
          <Route path="/:userId">
            <UserDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function UserList() {
  return (
    <div>
      <h2>User list</h2>
    </div>
  );
}

function UserDetails() {
  const { userId } = useParams();
  return (
    <div>
      <h2>{userId}</h2>
    </div>
  );
}
