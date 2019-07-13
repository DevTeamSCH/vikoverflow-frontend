import axios from './session';
import { ADD_QUESTION } from './types';
import history from '../history';

export const addQuestion = ({title, details, tags}) => (

  async (dispatch) => {
    try {
      const response = await axios.post('/api/v1/questions/', { title, text: details, tags });

      if (response.status > 200 && response.status < 300) {
        dispatch({
          type: ADD_QUESTION,
          payload: response.data,
        });
        history.push('/home');
      }
    } catch (e) {
      console.log(e);
    }
  }
);