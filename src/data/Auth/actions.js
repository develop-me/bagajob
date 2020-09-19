import {
    signUp as apiSignUp,
    login as apiLogin,
    forgotPasswordInit as apiForgotPasswordInit,
    passwordReset as apiPasswordReset
} from '../ApiRequests/auth'

import {
    RESET_AUTH_RESPONSE,
    RESET_ERRORS,
    SIGNUP_POST_REQUEST,
    SIGNUP_POST_SUCCESS,
    SIGNUP_POST_FAILURE,
    LOGIN_POST_REQUEST,
    LOGIN_POST_SUCCESS,
    LOGIN_POST_FAILURE,
    FORGOT_PASSWORD_INIT_POST_REQUEST,
    FORGOT_PASSWORD_INIT_POST_SUCCESS,
    FORGOT_PASSWORD_INIT_POST_FAILURE,
    PASSWORD_RESET_POST_REQUEST,
    PASSWORD_RESET_POST_SUCCESS,
    PASSWORD_RESET_POST_FAILURE
} from './constants'

// sign up user then redirect them to mainpage
export const signUp = (data, history) => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(signUpRequest())
        apiSignUp(data)
            .then(successResponse => {
                dispatch(signUpSuccess(successResponse))
                setTimeout(() => {
                    history.push("/mainpage");
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
        type: SIGNUP_POST_REQUEST
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
                    history.push("/mainpage");
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
        type: LOGIN_POST_REQUEST
    })
)

const loginSuccess = data => dispatch => (
    dispatch({
        type: LOGIN_POST_SUCCESS,
        payload: data.data
    })
)

const loginFailure = error => dispatch => (
    dispatch({
        type: LOGIN_POST_FAILURE,
        payload: error
    })
)

// forgot password initial request
export const forgotPasswordInit = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(forgotPasswordInitRequest())
        apiForgotPasswordInit(data)
            .then(successResponse => {
                dispatch(forgotPasswordInitSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(forgotPasswordInitFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const forgotPasswordInitRequest = () => dispatch => (
    dispatch({
        type: FORGOT_PASSWORD_INIT_POST_REQUEST
    })
)

const forgotPasswordInitSuccess = data => dispatch => (
    dispatch({
        type: FORGOT_PASSWORD_INIT_POST_SUCCESS,
        payload: data
    })
)

const forgotPasswordInitFailure = error => dispatch => (
    dispatch({
        type: FORGOT_PASSWORD_INIT_POST_FAILURE,
        payload: error
    })
)

// password reset request
export const passwordReset = () => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(passwordResetRequest())
        apiPasswordReset()
            .then(successResponse => {
                dispatch(passwordResetSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(passwordResetFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const passwordResetRequest = () => dispatch => (
    dispatch({
        type: PASSWORD_RESET_POST_REQUEST
    })
)

const passwordResetSuccess = data => dispatch => (
    dispatch({
        type: PASSWORD_RESET_POST_SUCCESS,
        payload: data
    })
)

const passwordResetFailure = error => dispatch => (
    dispatch({
        type: PASSWORD_RESET_POST_FAILURE,
        payload: error
    })
)

// reset authResponse
export const resetAuthResponse = () => dispatch => {
    dispatch({
        type: RESET_AUTH_RESPONSE
    })
}

// reset errors
export const resetErrors = () => dispatch => {
    dispatch({
        type: RESET_ERRORS
    })
}