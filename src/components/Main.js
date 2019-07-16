import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AddQuestionContainer from '../containers/AddQuestionContainer';

const Main = () => (
  <Switch>
    <Redirect exact from='/' to='/home' />
    <Route exact path='/home' component={withRouter(HomePage)} />
    <Route exact path='/q/browse' component={QuestionsPage} />
    <Route exact path='/q/new' component={NewQuestionPage} />
    <Route path='/q/:id' component={QuestionDetailPage} />
    <Route path='/q/add' component={AddQuestionContainer} />
  </Switch>
);

export default Main;
