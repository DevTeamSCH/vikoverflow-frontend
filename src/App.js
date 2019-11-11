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

        {routes.map((route, index) => {
          let TargetComponent = route.component;

          let RouteComponent = Route;
          if (route.loginRequired)
            RouteComponent = LoggedInRoute;
          else if (route.logoutRequired)
            RouteComponent = LoggedOutRoute;

          return (
            <RouteComponent user={user} path={route.path} exact key={index}>
              <LayoutWrapper route={route}>
                <TargetComponent />
              </LayoutWrapper>
            </RouteComponent>
          );
        })}

        <Route path='*'><NotFoundPage/></Route>
      </Switch>
    </Router>
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
