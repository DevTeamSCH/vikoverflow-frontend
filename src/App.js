import React, {useEffect} from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {connect} from 'react-redux';

import {getUserData} from './actions';
import Layout from './components/Layout';
import {NotFoundPage} from "./pages";
import routes from "./routes";

export const history = createBrowserHistory();

function App({ user, getUserData }) {
  useEffect(() => { getUserData(); }, []);

  return user.id === undefined ? (<p>Loading...</p>) : (
    <Router history={history}>
      <Switch>
        {routes.filter(route => route.loginRequired).map(route => (
          <LoggedInRoute user={user} path={route.path} exact key={route.path} component={wrapLayout(route)}/>
        ))}

        {routes.filter(route => route.logoutRequired).map(route => (
          <LoggedOutRoute user={user} path={route.path} exact key={route.path} component={wrapLayout(route)}/>
        ))}

        {routes.filter(route => !route.loginRequired  && !route.logoutRequired).map(route => (
          <Route path={route.path} exact key={route.path} component={wrapLayout(route)}/>
        ))}

        <Route path='*'><NotFoundPage/></Route>
      </Switch>
    </Router>
  );
}

function wrapLayout({component: Component, noLayout}) {
  return class extends React.Component {
    render() {
      return noLayout ? <Component /> : <Layout><Component/></Layout>;
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
