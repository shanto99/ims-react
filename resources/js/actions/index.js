import axios from "axios";
import { LOGIN } from "../constants/action-types";

export function login(userId, password) {
    return function(dispatch) {
        axios.post('/login', {
            UserID: userId,
            Password: password
        }).then(function(res) {
            dispatch({ type: LOGIN, payload: res.data.user })
        });
    }
}
