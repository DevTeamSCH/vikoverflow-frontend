import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/home' />
    <Route exact path='/home' />
  </Switch>
);

export default Main;
