import React, { useEffect } from 'react';
import {Router, Route, Switch, Redirect, Link, withRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import { getUserData } from './actions';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import {HomePage, NewQuestionPage, QuestionDetailPage, QuestionsPage} from "./pages";

export const history = createBrowserHistory();

function AuthorizedApp() {
  return (
    <Layout>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/q/browse' component={QuestionsPage} />
      <Route exact path='/q/new' component={NewQuestionPage} />
      <Route path='/q/:id' component={QuestionDetailPage} />
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
