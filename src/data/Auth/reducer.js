import {
    RESET_AUTH_RESPONSE,
    LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    CODE_ERROR,
    SHORT_PASSWORD
} from './constants'

export const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case SHORT_PASSWORD:
            return {
                ...state,
                authResponse: 'Password is too short.'
            }
        case RESET_AUTH_RESPONSE:
            return {
                ...state,
                authResponse: null
            }
        case LOADING:
            return {
                ...state,
                authResponse: 'Loading...'
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                authResponse: 'Redirecting you to dashboard...',
                user: { ...payload }
            }
        case LOGIN_ERROR:
            return {
                ...state,
                authResponse: payload,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authResponse: 'Sign up successful!',
            }

        case SIGNUP_ERROR:
            return {
                ...state,
                authResponse: payload,
            }

        case CODE_ERROR:
            return {
                ...state,
                authResponse: 'There seems to be a problem, please try again later.',
            }
        default:
            return state
    }
}