export default (state, action) => {
    const { type, payload } = action
    switch (type) {
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