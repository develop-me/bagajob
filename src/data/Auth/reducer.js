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
    PASSWORD_RESET_POST_FAILURE,
    LOGOUT
} from './constants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case RESET_ERRORS:
            return {
                ...state,
                errors: {}
            }
        case RESET_AUTH_RESPONSE:
            return {
                ...state,
                authResponse: null,
                errors: {}
            }
        case SIGNUP_POST_REQUEST:
            return {
                ...state,
                authResponse: 'Loading...',
            }
        case SIGNUP_POST_SUCCESS:
            const access_token = payload.data.success.token
            return {
                ...state,
                authResponse: 'Signup successful! Logging in...',
                user: { ...payload.data.user, access_token },
                user_id: payload.data.user.id,
                name: payload.data.user.name,
                email: payload.data.user.email,
                access_token: access_token
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
                user: payload,
                user_id: payload.user.id,
                name: payload.user.name,
                email: payload.user.email,
                access_token: payload.access_token
     
            }
        case LOGIN_POST_FAILURE:
            return {
                ...state,
                errors: payload,
                authResponse: payload.message
            }
        case FORGOT_PASSWORD_INIT_POST_REQUEST:
            return {
                ...state,
                authResponse: 'Loading...'
            }
        case FORGOT_PASSWORD_INIT_POST_SUCCESS:
            return {
                ...state,
                authResponse: 'Password reset request successful. Please check your email.'
            }
        case FORGOT_PASSWORD_INIT_POST_FAILURE:
            return {
                ...state,
                errors: payload
            }
        case PASSWORD_RESET_POST_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case PASSWORD_RESET_POST_SUCCESS:
            return {
                ...state,
                user: { ...payload },
                loaded: true
            }
        case PASSWORD_RESET_POST_FAILURE:
            return {
                ...state,
                errors: payload,
                loaded: true
            }
        case LOGOUT:
            return {
                authResponse: 'Successfully logged out',
                user: {},
                errors: {},
                loaded: true,
                access_token: null,
                name: "",
                email: "",
                user_id: "",
            }
        default:
            return {}
    }
}