import {
  CREATE_ANSWER_COMMENT,
  CREATE_QUESTION_ANSWER,
  CREATE_QUESTION_COMMENT,
  GET_QUESTION,
  GET_QUESTIONS,
} from './types';
import axios from './session';

export const getQuestionList = () => 
  async (dispatch) => {
    let questions = await axios.get('/api/v1/questions');
    dispatch({
      type: GET_QUESTIONS,
      questions: questions.data,
    });
  };

export const getQuestion = (id) =>
  async (dispatch) => {
    let question = await axios.get(`/api/v1/questions/${id}/`);
    dispatch({
      type: GET_QUESTION,
      question: question.data,
    });
  };

export const changeQuestionVote = (id, new_vote) =>
  async (dispatch) => {
    await axios.put(`/api/v1/questions/${id}/vote/`, {'user_vote': new_vote});
  };

export const changeAnswerVote = (id, new_vote) =>
  async (dispatch) => {
    await axios.put(`/api/v1/answers/${id}/vote/`, {'user_vote': new_vote});
  };

export const changeCommentVote = (id, new_vote) =>
  async (dispatch) => {
    await axios.put(`/api/v1/comments/${id}/vote/`, {'user_vote': new_vote});
  };

export const addQuestionComment = (question_id, comment_text, anonymous) =>
  async (dispatch) => {
    let comment = await axios.post(`/api/v1/questions/${question_id}/comments/`, {'text': comment_text, 'show_username': !anonymous});
    dispatch({
      type: CREATE_QUESTION_COMMENT,
      comment: comment.data,
    });
  };


export const addAnswerComment = (answer_id, comment_text, anonymous) =>
  async (dispatch) => {
    let comment = await axios.post(`/api/v1/answers/${answer_id}/comments/`, {'text': comment_text, 'show_username': !anonymous});
    dispatch({
      type: CREATE_ANSWER_COMMENT,
      answer_id: answer_id,
      comment: comment.data,
    });
  };


export const addQuestionAnswer = (question_id, answer_text, anonymous) =>
  async (dispatch) => {
    let answer = await axios.post(`/api/v1/questions/${question_id}/answers/`, {'text': answer_text, 'show_username': !anonymous});

    dispatch({
      type: CREATE_QUESTION_ANSWER,
      answer: answer.data,
    });
  };