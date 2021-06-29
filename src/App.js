import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Login from './pages/login';
import AdminRoute from './pages/adminroute';

function PrivateRoute({children, ...rest}) {
  const isAuth = true;
  return (
    <Route {...rest}>
      {(isAuth === true) ? (
        children
      ) : (
        <Redirect to='/' />
      )}
    </Route>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/admin">
          <AdminRoute />  
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
