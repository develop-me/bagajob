// jobs reducers
import addJobReducer from './JobReducers/addJobReducer'
import editJobReducer from './JobReducers/editJobReducer'
import listJobsReducer from './JobReducers/listJobsReducer'
import viewJobReducer from './JobReducers/viewJobReducer'
import deleteJobReducer from './JobReducers/deleteJobReducer'
// auth reducer
import AuthReducer from './AuthReducer'

const initialState = {
    fetching: false,
    submitting: false,
    errors: null,
    jobs: [],
    job: {},
    authResponse: null,
    loaded: false,
    user: {}
}

const reducer = (state = initialState, action) => ({
    ...state,
    ...addJobReducer(state, action, initialState),
    ...editJobReducer(state, action, initialState),
    ...listJobsReducer(state, action, initialState),
    ...viewJobReducer(state, action, initialState),
    ...deleteJobReducer(state, action, initialState),
    ...AuthReducer(state, action, initialState),
})

export default reducer