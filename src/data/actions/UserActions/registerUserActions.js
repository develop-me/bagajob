import axios from "../../axios";

import {
    SIGNUP_ERROR,
    CODE_ERROR,
    SIGNUP_SUCCESS,
    RESET_AUTH_RESPONSE,
    SHORT_PASSWORD,
    LOADING
} from '../../constants'

export const registerUser = data => dispatch => {
    dispatch({ type: RESET_AUTH_RESPONSE });
    dispatch({ type: LOADING });
    if (data.password < 6) {
        return dispatch({ type: SHORT_PASSWORD })
    }
    axios.post("user/register", {
        fullname: data.fullName,
        email: data.email,
        password: data.password
    }).then(res => {
        const { token } = res.data;
        if (token !== null) {
            localStorage.setItem("user", 'Bearer ' + token);
            dispatch({ type: SIGNUP_SUCCESS })
        } else {
            dispatch({ type: SIGNUP_ERROR, payload: res })
        }
    }, error => {
        dispatch({ type: CODE_ERROR, payload: error });
    });
}