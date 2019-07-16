import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';

export const QuestionDetailPage = ({match}) => {
  return (
    <QuestionContainer id={match.params.id} />
  );
};
