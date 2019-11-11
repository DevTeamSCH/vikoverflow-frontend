import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import { getUserData } from './actions';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';

export const history = createBrowserHistory();


function HomePage() {
  return <div><h1>Home</h1></div>;
}

function AboutPage() {
  return <div><h1>About</h1></div>;
}

function QuestionsPage() {
  return <div><h1>Questions</h1></div>;
}

function AuthorizedApp() {
  return (
    <Layout>
      <Route exact path='/questions' component={QuestionsPage} />
      <Route exact path='/' component={HomePage} />
    </Layout>
  );
}

function ForbiddenPage() {
  return <div><h1>Forbidden</h1><Link to='/login'>Back to login page</Link></div>
}

function App({ user, getUserData }) {
  useEffect(() => { getUserData(); }, []);
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/login'>{user.id ? <Redirect to='/' /> : <LoginPage />}</Route>
        <Route exact path='/forbidden'><ForbiddenPage /></Route>
        <Route path='/'>{user.id ? <AuthorizedApp /> : <Redirect to='/login' />}</Route>
      </Switch>
    </Router>
  );
}

export default connect(state => ({ user: state.user }), { getUserData })(App);
