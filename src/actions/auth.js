import { GET_USER } from './types';
import axios from './session';

export const getUserData = () => (

  async (dispatch) => {
    try {
      let profile = await axios.get('/api/v1/accounts/me');

      const {id, user: {username, email, first_name, last_name, is_staff}} = profile.data;
      dispatch({
        type: GET_USER,
        payload: { id, username, email, first_name, last_name, is_staff },
      });

    } catch (e) {
      console.log(e)
    }
  }
);
