import React, {useEffect} from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {connect} from 'react-redux';

import {getUserData} from './actions';
import Layout from './components/Layout';
import {ForbiddenPage, HomePage, NewQuestionPage, NotFoundPage, QuestionDetailPage, QuestionsPage} from "./pages";
import LoginPage from "./pages/LoginPage";

export const history = createBrowserHistory();

function App({ user, getUserData }) {
  useEffect(() => { getUserData(); }, []);

  return user.id === undefined ? (<p>Loading...</p>) : (
    <Router history={history}>
      <Switch>
        <LoggedOutRoute exact path='/login' user={user} component={LoginPage} />
        <LoggedInRoute exact path='/' user={user} component={withLayout(HomePage)} />
        <LoggedInRoute exact path='/q/browse' user={user} component={withLayout(QuestionsPage)} />
        <LoggedInRoute exact path='/q/new' user={user} component={withLayout(NewQuestionPage)} />
        <LoggedInRoute exact path='/q/:id' user={user} component={withLayout(QuestionDetailPage)} />
        <Route exact path='/forbidden' user={user} component={ForbiddenPage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

function withLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <Layout><WrappedComponent {...this.props} /></Layout>
    }
  }
}

function LoggedInRoute({ component: Component, user, ...rest }) {
  return (
    <Route {...rest} render={props => user.id ? <Component {...props} /> : <Redirect to='/login' />} />
  );
}

function LoggedOutRoute({ component: Component, user, ...rest }) {
  return (
    <Route {...rest} render={props => user.id == null ? <Component {...props} /> : <Redirect to='/' />} />
  )
}


export default connect(state => ({ user: state.user }), { getUserData })(App);
