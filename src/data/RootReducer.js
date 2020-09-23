import { default as JobReducer } from './Jobs/reducer'
import { default as AuthReducer } from './Auth/reducer'
import { default as AccountReducer } from './Account/reducer'
import { default as AppNotesReducer } from './AppNotes/reducer'
import { default as InterviewsReducer } from './Interviews/reducer'

const initialState = {
    jobs: [
        {
            id: 1,
            title: "Job 1",
            company: "company 1",
            stage: 2,
            active: true
        },
        {
            id: 2,
            title: "Job 2",
            company: "company 2",
            stage: 3,
            active: true
        },

    ],
    job: {
        id: 1,
        title: "Software Guru",
        company: "Awesome Software Inc",
        active: true,
        location: "Berlin",
        salary: 25000,
        description: "We are looking for a dynamic blah blah",
        date_applied: "05/09/2020 16:54",
        closing_date: "08/09/2020",
        cv: "foobar",
        cover_letter: "abcd",
        interviews: [
            {
                id: 5,
                date: "05/09/2020 16:00",
                format: "video",
                interviewer: "Elon Musk",
                notes: "Elon Musk is scary and the interview didn't go well"
            }
        ],
        application_notes: [
            {
                id: 5,
                date: "06/04/2020",
                data: "I spoke to Ben today and then I had a ham sandwich"
            },
            {
                id: 17,
                date: "06/04/2020",
                data: "Interview 06/09/2020 - amazeballs"
            }
        ]
    },
    user: {
        token_type: "Bearer",
        expires_in: "31536000",
        access_token: "<token>",
        refresh_token: "<token>",
        user: {
            id: 5,
            name: "Adam Gardner",
            email: "adam@mail.com",
            created_at: "2020-09-01 14:22:46"
        }
    },
    authResponse: null,
    loaded: true,
    errors: null,
    name: ""
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