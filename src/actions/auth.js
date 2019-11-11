import { GET_USER } from './types';
import axios from './session';
import { history } from '../App';

export const getUserData = () =>

  async (dispatch) => {
    try {
      const response = await axios.get('/api/v1/accounts/me');
      const { id, full_name } = response.data;
      dispatch({
        type: GET_USER,
        payload: { id, full_name },
      });

    } catch (e) {
      if (e.response.status === 403) { history.replace('/forbidden'); }
      else if (e.response.status === 401) {
        dispatch({
          type: GET_USER,
          payload: { id: null, full_name: null },
        });
      }
      else console.error(e);
    }
  }
  ;
