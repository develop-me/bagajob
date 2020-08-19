import {
    RESET_AUTH_RESPONSE,
    LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../constants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
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
        default:
            return state
    }
}