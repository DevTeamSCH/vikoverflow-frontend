import React, { useEffect } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import { getUserData } from './actions';
import Layout from './components/Layout';
import {NotFoundPage} from "./pages";
import routes from "./routes";

export const history = createBrowserHistory();

function App({ user, getUserData }) {
  useEffect(() => { getUserData(); }, []);

  return user.id === undefined ? (<p>Loading...</p>) : (
    <Router history={history}>
      <Switch>
        {routes.filter(route => route.loginRequired).map(route => getRouteComponent(user, route, LoggedInRoute))}
        {routes.filter(route => route.logoutRequired).map(route => getRouteComponent(user, route, LoggedOutRoute))}
        {routes.filter(route => !route.loginRequired  && !route.logoutRequired).map(route => getRouteComponent(user, route, Route))}
        <Route path='*'><NotFoundPage/></Route>
      </Switch>
    </Router>
  );
}

function getRouteComponent(user, route, AuthRouteComponent) {
  let TargetComponent = route.component;
  return (
    <AuthRouteComponent user={user} path={route.path} exact key={route.path}>
      <LayoutWrapper route={route}>
        <TargetComponent />
      </LayoutWrapper>
    </AuthRouteComponent>
  );
}

function LayoutWrapper({children, route, ...props}) {
  if (route.noLayout)
    return React.cloneElement(children, props);

  return (
    <Layout>
      {React.cloneElement(children, props)}
    </Layout>
  )
}

function LoggedInRoute({ children, user, ...rest }) {
  return (
    <Route {...rest} render={props => user.id ? React.cloneElement(children, props) : <Redirect to='/login' />} />
  );
}

function LoggedOutRoute({ children, user, ...rest }) {
  return (
    <Route {...rest} render={props => user.id == null ? React.cloneElement(children, props) : <Redirect to='/' />} />
  )
}


export default connect(state => ({ user: state.user }), { getUserData })(App);
