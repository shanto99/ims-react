import { LOGIN } from "../constants/action-types";
const initialState = {
    user: null
};

function rootReducer(state=initialState, action) {
    if(action.type === LOGIN) {
        return Object.assign({}, state, {
            user: action.payload
        });
    }

    return state;
}

export default rootReducer;
