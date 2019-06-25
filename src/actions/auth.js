import { GET_USER } from './types';
import axios from './session';

export const getUserData = () => (

  async (dispatch) => {
    try {
      let profile = await axios.get('/api/v1/accounts/me');

      const {id, full_name} = profile.data;
      dispatch({
        type: GET_USER,
        payload: { id, full_name },
      });

    } catch (e) {
      console.log(e)
    }
  }
);
