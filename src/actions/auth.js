import { GET_USER } from './types';
import axios from './session';
import history from '../history';

export const getUserData = () => 

  async (dispatch) => {
    try {
      let profile = await axios.get('/api/v1/accounts/me');

      const {id, full_name} = profile.data;
      dispatch({
        type: GET_USER,
        payload: { id, full_name },
      });

    } catch (e) {
      if (e.response) {
        if (e.response.status === 403) {
          history.push('/forbidden');
        }
      }
      console.log(e);
    }
  }
;
