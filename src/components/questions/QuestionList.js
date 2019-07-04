import QuestionListQuestion from './QuestionListQuestion';
import React from 'react';
import {Container} from 'semantic-ui-react';

const QuestionList = ({questions, vote_changed, history}) => (
  <Container>
    {questions.map((question, index) => (
      <QuestionListQuestion key={index} {...question} vote_changed={new_vote => vote_changed(question.id, new_vote)} history={history}/>
    ))}
  </Container>
);


export default QuestionList;