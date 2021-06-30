import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import { useEffect } from "react";
import Login from './pages/login';
import AdminRoute from './pages/adminroute';
import Toast from './components/toast';

function PrivateRoute({children, ...rest}) {
  const isAuth = false;
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
    <>
    <Toast />
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute path="/admin">
          <AdminRoute />  
        </PrivateRoute>
      </Switch>
    </Router>
    </>
  );
}

export default App;
