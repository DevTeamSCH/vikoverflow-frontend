import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeQuestionsList from "../containers/questions/HomeQuestionList";
import { HomePage, QuestionsPage, QuestionDetailPage, NewQuestionPage } from '../pages'


const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/home' />
    <Route exact path='/home' component={HomePage} />
    <Route exact path='/q/browse' component={QuestionsPage} />
    <Route exact path='/q/new' component={NewQuestionPage} />
    <Route path='/q/:id' component={QuestionDetailPage} />
  </Switch>
);

export default Main;
