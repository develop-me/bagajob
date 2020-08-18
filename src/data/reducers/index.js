import addJobReducer from './addJobReducer'
import editJobReducer from './editJobReducer'
import listJobsReducer from './listJobsReducer'
import viewJobReducer from './viewJobReducer'
import deleteJobReducer from './deleteJobReducer'

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
})

export default reducer