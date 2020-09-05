import {
    signUp as apiSignUp,
    login as apiLogin
} from '../ApiRequests/auth'

import {
    RESET_AUTH_RESPONSE,
    SHORT_PASSWORD,
    SIGNUP_POST_REQUEST,
    SIGNUP_POST_SUCCESS,
    SIGNUP_POST_FAILURE,
    LOGIN_POST_REQUEST,
    LOGIN_POST_SUCCESS,
    LOGIN_POST_FAILURE,
} from './constants'

// sign up user
export const signUp = (data, history) => dispatch => {
    if (data.password < 6) {
        return dispatch({ type: SHORT_PASSWORD })
    }
    return new Promise((resolve, reject) => {
        dispatch(signUpRequest())
        apiSignUp(data)
            .then(successResponse => {
                dispatch(signUpSuccess(successResponse))
                setTimeout(() => {
                    history.push("/dashboard");
                }, 300)
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(signUpFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const signUpRequest = () => dispatch => (
    dispatch({
        type: SIGNUP_POST_REQUEST,
    })
)

const signUpSuccess = data => dispatch => (
    dispatch({
        type: SIGNUP_POST_SUCCESS,
        payload: data
    })
)

const signUpFailure = error => dispatch => (
    dispatch({
        type: SIGNUP_POST_FAILURE,
        payload: error
    })
)

// login user
export const login = (data, history) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(loginRequest())
        apiLogin(data)
            .then(successResponse => {
                dispatch(loginSuccess(successResponse))
                setTimeout(() => {
                    history.push("/dashboard");
                }, 300)
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(loginFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const loginRequest = () => dispatch => (
    dispatch({
        type: LOGIN_POST_REQUEST,
    })
)

const loginSuccess = data => dispatch => (
    dispatch({
        type: LOGIN_POST_SUCCESS,
        payload: data
    })
)

const loginFailure = error => dispatch => (
    dispatch({
        type: LOGIN_POST_FAILURE,
        payload: error
    })
)

// reset authResponse
export const resetAuthResponse = () => dispatch => {
    dispatch({ type: RESET_AUTH_RESPONSE })
}