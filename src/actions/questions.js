import {GET_QUESTION, GET_QUESTIONS} from './types';
import axios from './session';

export const getQuestionList = () => 
  async (dispatch) => {
    let questions = await axios.get('/api/v1/questions');
    dispatch({
      type: GET_QUESTIONS,
      questions: questions.data,
    });
  }
;

export const changeQuestionVote = (id, new_vote) => 
  async (dispatch) => {
    await axios.put(`/api/v1/questions/${id}/vote/`, {'user_vote': new_vote});
  }
;

export const getQuestion = (id) =>
  async (dispatch) => {
    let question = await axios.get(`/api/v1/questions/${id}/`);
    dispatch({
      type: GET_QUESTION,
      question: question.data,
    });
  };