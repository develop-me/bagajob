import { default as JobReducer } from './Jobs/reducer'
import { default as AuthReducer } from './Auth/reducer'
import { default as AccountReducer } from './Account/reducer'
import { default as AppNotesReducer } from './AppNotes/reducer'
import { default as InterviewsReducer } from './Interviews/reducer'

const initialState = {
    jobs: [
       

    ],
    job: {},
    user: {
        token_type: "Bearer",
        expires_in: "31536000",
        access_token: "<token>",
        refresh_token: "<token>",
        user: {
            id: "",
            name: "",
            email: "",
            created_at: "2020-09-01 14:22:46"
        }
    },
    authResponse: null,
    loaded: true,
    errors: {},
    name: "",
    email: ""
}

const RootReducer = (state = initialState, action) => ({
    ...state,
    ...JobReducer(state, action, initialState),
    ...AuthReducer(state, action, initialState),
    ...AccountReducer(state, action, initialState),
    ...AppNotesReducer(state, action, initialState),
    ...InterviewsReducer(state, action, initialState),
})

export default RootReducer