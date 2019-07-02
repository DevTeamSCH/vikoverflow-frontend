import axios from './session';
import { ADD_QUESTION } from './types';

export const addQuestion = ({title, text}) => (

  async (dispatch) => {
    try {
      const response = await axios.post('api/v1/questions', { title, text });

      if (response.status == '200') {
        dispatch({
          type: ADD_QUESTION,
          payload: response.data,
        });
      }
    } catch(e) {
      console.log(e);
    }
  }
);

