import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddQuestionContainer from '../containers/AddQuestionContainer';

const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/home' />
    <Route exact path='/home' />
    <Route path='/q/add' component={AddQuestionContainer} />
  </Switch>
);

export default Main;
