import { combineReducers } from 'redux';
import {QuestionsReducer} from "./QuestionsReducer";

const rootReducer = combineReducers({
  user: [],
  questions: QuestionsReducer,
});

export default rootReducer;
