import {
    ACCOUNT_PATCH_REQUEST,
    ACCOUNT_PATCH_SUCCESS,
    ACCOUNT_PATCH_FAILURE,
    ACCOUNT_DELETE_REQUEST,
    ACCOUNT_DELETE_SUCCESS,
    ACCOUNT_DELETE_FAILURE
} from './constants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case ACCOUNT_PATCH_REQUEST:
            return {
                ...state,
                errors: {},
                loaded: false,
            }
        case ACCOUNT_PATCH_SUCCESS:
            return {
                ...state,
                loaded: true,
                user: { ...payload.user },
                user_id: payload.user.id,
                name: payload.user.name,
                email: payload.user.email,
                access_token: payload.user.access_token,
            }
        case ACCOUNT_PATCH_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        case ACCOUNT_DELETE_REQUEST:
            return {
                ...state,
                errors: {},
                loaded: false
            }
        case ACCOUNT_DELETE_SUCCESS:
            return {
                ...state,
                user: "",
                name: "",
                authResponse: "",
                user_id: "",
                access_token: "", 
                loaded: true
            }
        case ACCOUNT_DELETE_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        default:
            return {}
    }
}