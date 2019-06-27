import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddQuestionForm from './forms/AddQuestionForm';

const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/home' />
    <Route exact path='/home' />
    <Route path='/q/add' component={AddQuestionForm} />
  </Switch>
);

export default Main;
