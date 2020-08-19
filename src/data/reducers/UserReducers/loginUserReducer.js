export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'RESET_AUTH_RESPONSE':
            return {
                ...state,
                authResponse: null
            }
        case 'LOADING':
            return {
                ...state,
                authResponse: 'loading...'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authResponse: 'Redirecting you to dashboard...',
                user: { ...payload }
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                authResponse: action.res.data.message,
            }
        default:
            return state
    }
}