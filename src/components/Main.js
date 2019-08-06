import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { HomePage, QuestionsPage, NewQuestionPage, QuestionDetailPage, WelcomePage, ForbiddenPage } from '../pages';


const Main = (props) => (
  props.isLoggedIn ?
    <LoggedInRoutes />
    :
    <NoLoginRoutes />
);

const LoggedInRoutes = () => (
  <Switch>
    <Redirect exact from='/' to='/home' />
    <Redirect exact from='/welcome' to='/home' />
    <Route exact path='/home' component={withRouter(HomePage)} />
    <Route exact path='/q/browse' component={QuestionsPage} />
    <Route exact path='/q/new' component={NewQuestionPage} />
    <Route path='/q/:id' component={QuestionDetailPage} />
  </Switch>
);

const NoLoginRoutes = () => (
  <Switch>
    <Redirect exact from='/' to='/welcome' />
    <Route exact path='/welcome' component={WelcomePage} />
    <Route exact path='/forbidden' component={ForbiddenPage} />
  </Switch>
);

export default Main;
