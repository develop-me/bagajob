import axios from "../axios";

import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    RESET_AUTH_RESPONSE,
    SHORT_PASSWORD,
    LOADING,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS,
    CODE_ERROR
} from '../constants'

// register user
export const registerUser = data => dispatch => {
    dispatch(resetAuthResponse());
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

// login user
export const loginUser = (data, history) => dispatch => {
    dispatch(resetAuthResponse());
    dispatch({ type: LOADING });
    if (data.password.length < 6) {
        return dispatch({ type: SHORT_PASSWORD })
    }
    axios.post("user/login", {
        email: data.email,
        password: data.password
    }).then(res => {
        const { success } = res.data;
        console.log(success)
        localStorage.setItem('user', 'Bearer ' + res.data.token)
        if (success) {
            const user = {
                token: res.data.token,
                id: res.data.id,
                name: res.data.firstname,
                email: res.data.email
            }
            dispatch({ type: LOGIN_SUCCESS, payload: user })
            setTimeout(() => {
                history.push("/dashboard");
            }, 500);
        }
        else {
            dispatch({ type: LOGIN_ERROR, payload: res })
        }
    })
}

// reset authResponse
export const resetAuthResponse = () => {
    return (dispatch) => {
        dispatch({ type: RESET_AUTH_RESPONSE });
    }
}