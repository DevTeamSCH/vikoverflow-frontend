import axios from './session';
import { ADD_QUESTION } from './types';

export const addQuestion = ({title, details, tags}) => (

  async (dispatch) => {
    try {
      const response = await axios.post('/api/v1/questions/', { title, text: details, tags });

      if (response.status === '201') {
        dispatch({
          type: ADD_QUESTION,
          payload: response.data,
        });

      }
    } catch (e) {
      console.log(e);
    }
  }
);