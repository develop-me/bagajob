import {
    SIGNUP_ERROR,
    CODE_ERROR,
    SIGNUP_SUCCESS,
    RESET_AUTH_RESPONSE,
    SHORT_PASSWORD,
    LOADING
} from '../../constants'

export default (state, action) => {
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
                authResponse: 'there seems to be a problem please try again later',
            }
        default:
            return state
    }
}