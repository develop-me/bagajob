import { default as JobReducer } from './Jobs/reducer'
import { default as AuthReducer } from './Auth/reducer'
import { default as AccountReducer } from './Account/reducer'
import { default as AppNotesReducer } from './AppNotes/reducer'
import { default as InterviewsReducer } from './Interviews/reducer'

export const initialState = {
    jobs: [
       

    ],
    // We must define the 'job' object in initial state.
    // This is because when the user visits the single job page, the Job.js component uses the job object to render, and does not request the API until the component has mounted.
    // API data (in format determined by laravel API)
    job: {
        data: {
            data: {
                id: "",
                title: "",
                company: "",
                active: "",
                location: "",
                salaray: "",
                closing_date: "",
                date_applied: "",
                description: "",
                stage: "",
                interviews: [],
                application_notes: []
            }
        },
    },
    user: {
        token_type: "Bearer",
        expires_in: "31536000",
        access_token: null,
        refresh_token: null,
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
    email: "",
    job_id: "",
    user_id: "",
    access_token: null,
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