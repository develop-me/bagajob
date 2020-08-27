// jobs reducers
import { reducer as JobReducer } from './Jobs/reducer'
import { reducer as AppNotesReducer } from './AppNotes/reducer'
import { reducer as InterviewReducer } from './Interviews/reducer'
import { reducer as AuthReducer } from './Auth/reducer'

const initialState = {
    fetching: false,
    submitting: false,
    errors: null,
    jobs: [
        {
            id: 1,
            jobTitle: "Job 1",
            company: "company 1",
            stage: 2,
            active: true
        },
        {
            id: 2,
            jobTitle: "Job 2",
            company: "company 2",
            stage: 3,
            active: true
        },

    ],
    job: {
        id: 2,
        jobTitle: "Job 2",
        company: "company 2",
        stage: 3,
        cv: "///",
        cover_letter: "foobar",
        interviews: [
            {
                id: 3,
                date: "05/09/2020 16:00",
                format: "video",
                interviewer: "Elon Musk",
                notes: "Elon Musk is scary and the interview didn't go well"
            }
        ],
        application_notes: [
            {
                id: 5,
                note_category: "text",
                note_date: "06 / 04 / 2020",
                note_data: "I spoke to Ben today and then I had a ham sandwich"
            }
        ],
    },
    authResponse: null,
    loaded: true,
    user: {}
}

const reducer = (state = initialState, action) => ({
    ...state,
    ...JobReducer(state, action, initialState),
    ...AppNotesReducer(state, action, initialState),
    ...InterviewReducer(state, action, initialState),
    ...AuthReducer(state, action, initialState),
})

export default reducer