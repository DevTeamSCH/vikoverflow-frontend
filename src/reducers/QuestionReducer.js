import {CREATE_ANSWER_COMMENT, CREATE_QUESTION_ANSWER, CREATE_QUESTION_COMMENT, GET_QUESTION} from '../actions/types';

const INITIAL = {};

export const QuestionReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case GET_QUESTION:
      return action.question;
    case CREATE_QUESTION_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.comment],
      };
    case CREATE_ANSWER_COMMENT:
      let answers = state.answers.map(answer => {
        if (answer.id !== action.answer_id) { return answer; }
        return {
          ...answer,
          comments: [...answer.comments, action.comment],
        };
      });

      return {
        ...state,
        answers: answers,
      };
    case CREATE_QUESTION_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.answer],
      };
    default:
      return state;
  }
};