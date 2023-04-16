import './App.css';
import { Route, BrowserRouter, Navigate, Routes, Switch, Redirect, Link } from 'react-router-dom';
import ShowUsers from './ShowUsers';
import ShowOneUser from './ShowOneUser';
import AddUser from './AddUser';

//BrowserRouter handles the routing to the two different routes in the app, and Link component to create the link to the All Posts
function App() {
  return (
    <BrowserRouter>
                <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    }}>
      <ul >
            <li>
              <Link to="/">Show all Users</Link>
            </li>
            <li>
              <Link to="/post/:id">Specific User</Link>
            </li>
            <li>
              <Link to="/add-user">Add User</Link>
            </li>
          </ul>
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    }}>
        <Switch>
          <Route exact path="/">
            <ShowUsers />
          </Route>
          <Route path="/post/:id">
            <ShowOneUser />
          </Route>
          <Route path="/add-user">
            <AddUser />
          </Route>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;

