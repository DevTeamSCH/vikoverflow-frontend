import {GET_QUESTION} from '../actions/types';

const INITIAL = {};

export const QuestionReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case GET_QUESTION:
      return action.question;
    default:
      return state;
  }
};