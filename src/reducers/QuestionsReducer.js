import {GET_QUESTIONS} from "../actions/types";

const INITIAL = [];

export const QuestionsReducer = (state = INITIAL, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
};