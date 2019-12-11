import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';
import {useRouteMatch} from "react-router";

export const QuestionDetailPage = () => {
  let match = useRouteMatch("/q/:id");
  return (
    <QuestionContainer id={match.params.id} />
  );
};
