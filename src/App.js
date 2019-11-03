import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserData } from './actions';

const HomePage = () => (<div><h1>Home</h1><a href='/api/v1/logout'>Logout</a></div>);
const LoginPage = () => (<div><h1>Login</h1><a href='/api/v1/login/authsch'>Login</a></div>);

function ForbiddenPage() {
  return <div><h1>Forbidden</h1><Link to='/login'>Back to login page</Link></div>
}

function App({ user, getUserData: loadUser }) {
  useEffect(() => { loadUser(); }, []);
  const loggedIn = typeof user.id === 'number';
  return (
    <Router>
      <Switch>
        <Route exact path='/'>{loggedIn ? <HomePage /> : <Redirect to='/login' />}</Route>
        <Route exact path='/login'>{loggedIn ? <Redirect to='/' /> : <LoginPage />}</Route>
        <Route exact path='/forbidden'><ForbiddenPage /></Route>
      </Switch>
    </Router>
  );
}

export default connect(state => ({ user: state.user }), { getUserData })(App);
