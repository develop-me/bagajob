import {
    RESET_AUTH_RESPONSE,
    SHORT_PASSWORD,
    SIGNUP_POST_REQUEST,
    SIGNUP_POST_SUCCESS,
    SIGNUP_POST_FAILURE,
    LOGIN_POST_REQUEST,
    LOGIN_POST_SUCCESS,
    LOGIN_POST_FAILURE
} from './constants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case RESET_AUTH_RESPONSE:
            return {
                ...state,
                authResponse: null
            }
        case SHORT_PASSWORD:
            return {
                ...state,
                authResponse: 'Password must be at least 6 characters.'
            }
        case SIGNUP_POST_REQUEST:
            return {
                ...state,
                authResponse: 'Loading...'
            }
        case SIGNUP_POST_SUCCESS:
            return {
                ...state,
                authResponse: 'Signup successful! Logging in...'
            }
        case SIGNUP_POST_FAILURE:
            return {
                ...state,
                errors: payload,
            }
        case LOGIN_POST_REQUEST:
            return {
                ...state,
                authResponse: 'Loading...'
            }
        case LOGIN_POST_SUCCESS:
            return {
                ...state,
                authResponse: 'Redirecting you to dashboard...',
                user: { ...payload }
            }
        case LOGIN_POST_FAILURE:
            return {
                ...state,
                erros: payload
            }
        default:
            return state
    }
}