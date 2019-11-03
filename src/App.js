import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserData } from './actions';

const LoginPage = () => (<div><h1>Login</h1><a href='/api/v1/login/authsch'>Login</a></div>);

function Nav() {
  return (
    <div style={{ display: 'flex', direction: 'flex-row', marginLeft: '-5px' }}>
      <div style={{ margin: '0 5px' }}><Link to='/'>Home</Link></div>
      <div style={{ margin: '0 5px' }}><Link to='/questions'>Questions</Link></div>
      <div style={{ margin: '0 5px' }}><Link to='/about'>About</Link></div>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <a href='/api/v1/logout'>Logout</a>
    </div>
  );
}

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
      <Route exact path='/about' component={AboutPage} />
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
    <Router>
      <Switch>
        <Route exact path='/login'>{user.id ? <Redirect to='/' /> : <LoginPage />}</Route>
        <Route exact path='/forbidden'><ForbiddenPage /></Route>
        <Route path='/'>{user.id ? <AuthorizedApp /> : <Redirect to='/login' />}</Route>
      </Switch>
    </Router>
  );
}

export default connect(state => ({ user: state.user }), { getUserData })(App);
