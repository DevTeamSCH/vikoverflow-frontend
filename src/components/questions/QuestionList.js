import QuestionListQuestion from './QuestionListQuestion';
import React from 'react';
import {Container} from 'semantic-ui-react';

const QuestionList = ({questions}) => (
  <Container>
    {questions.map((question, index) => (
      <QuestionListQuestion key={index} {...question} />
    ))}
  </Container>
);


export default QuestionList;