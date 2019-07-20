import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { HomePage, QuestionsPage, NewQuestionPage, QuestionDetailPage, WelcomePage, ForbiddenPage } from '../pages';

const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/home' />
    <Route exact path='/welcome' component={WelcomePage} />
    <Route exact path='/forbidden' component={ForbiddenPage} />
    <Route exact path='/home' component={withRouter(HomePage)} />
    <Route exact path='/q/browse' component={QuestionsPage} />
    <Route exact path='/q/new' component={NewQuestionPage} />
    <Route path='/q/:id' component={QuestionDetailPage} />

  </Switch>
);

export default Main;
