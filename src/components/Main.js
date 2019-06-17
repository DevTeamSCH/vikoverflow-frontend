import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeQuestionsList from "../containers/questions/HomeQuestionList";


const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/home' />
    <Route exact path='/home' component={HomeQuestionsList} />
  </Switch>
);

export default Main;
