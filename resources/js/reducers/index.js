import { LOGIN, GET_USER } from "../constants/action-types";
const initialState = {
    user: null
};

function rootReducer(state=initialState, action) {
    if(action.type === LOGIN || action.type === GET_USER) {
        return Object.assign({}, state, {
            user: action.payload
        });
    }

    return state;
}

export default rootReducer;
