import { default as JobReducer } from './Jobs/reducer'
import { default as AuthReducer } from './Auth/reducer'
import { default as AccountReducer } from './Account/reducer'
import { default as AppNotesReducer } from './AppNotes/reducer'
import { default as InterviewsReducer } from './Interviews/reducer'

const initialState = {
    jobs: [
        

    ],

    job: ""
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