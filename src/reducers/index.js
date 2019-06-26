import { combineReducers } from 'redux';
import {QuestionsReducer} from './QuestionsReducer';

import { UserReducer } from './UserReducer';
import {QuestionReducer} from './QuestionReducer';

const rootReducer = combineReducers({
  user: UserReducer,
  questions: QuestionsReducer,
  question: QuestionReducer,
});

export default rootReducer;
