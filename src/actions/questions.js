import {GET_QUESTIONS} from "./types";
import axios from "./session";

export const getQuestionList = () => (
  async (dispatch) => {
    let questions = await axios.get('api/v1/questions');
    dispatch({
      type: GET_QUESTIONS,
      questions: questions.data
    })
  }
);