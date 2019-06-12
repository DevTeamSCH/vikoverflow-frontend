import { GET_USER } from "../actions/types"

const INITIAL = {};

export const UserReducer = (state = INITIAL, action) => {
    switch(action.type){
        case GET_USER:
            return {...state, ...action.payload};
        default: 
            return state;
    }
}