import { combineReducers } from 'redux';
import {QuestionsReducer} from "./QuestionsReducer";

import { UserReducer } from './UserReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  questions: QuestionsReducer,
});

export default rootReducer;
