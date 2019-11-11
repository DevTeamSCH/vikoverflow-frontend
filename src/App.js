import React, { useEffect } from 'react';
import {Router, Route, Switch, Redirect, Link, withRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import { getUserData } from './actions';
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import {ForbiddenPage, HomePage, NewQuestionPage, NotFoundPage, QuestionDetailPage, QuestionsPage} from "./pages";

export const history = createBrowserHistory();

function App({ user, getUserData }) {
  useEffect(() => { getUserData(); }, []);
  return user.id === undefined ? (<p>Loading...</p>) : (
    <Router history={history}>
      <Switch>
        <Route exact path='/login'>{user.id ? <Redirect to='/' /> : <LoginPage />}</Route>
        <Route exact path='/forbidden'><ForbiddenPage /></Route>

        <Layout>
          <LoggedInRoute user={user} exact path='/'><HomePage/></LoggedInRoute>
          <LoggedInRoute user={user} exact path='/q/browse'><QuestionsPage/></LoggedInRoute>
          <LoggedInRoute user={user} exact path='/q/new'><NewQuestionPage/></LoggedInRoute>
          <LoggedInRoute user={user} path='/q/:id'><QuestionDetailPage/></LoggedInRoute>
        </Layout>

        <Route path='*'><NotFoundPage/></Route>
      </Switch>
    </Router>
  );
}

function LoggedInRoute({ children, user, ...rest }) {
  return (
    <Route {...rest} render={() => user.id ? children : <Redirect to='/login' />} />
  );
}


export default connect(state => ({ user: state.user }), { getUserData })(App);
