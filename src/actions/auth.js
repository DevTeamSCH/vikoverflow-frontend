import { GET_USER } from './types'
import axios from'./session'

export const getUserData = () => (

    async (dispatch) => {
        try{
            let user = await axios.get('/api/v1/accounts/me')
            

            dispatch({
                type: GET_USER,
                payload: user.data
            });

        } catch(e) {
            console.log(e)
        }
    }
)