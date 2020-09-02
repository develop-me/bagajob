import {
    SINGLE_JOB_GET_REQUEST,
    SINGLE_JOB_GET_SUCCESS,
    SINGLE_JOB_PUT_SUCCESS,
    SINGLE_JOB_POST_SUCCESS,
} from './constants'

const initial = {
    jobs: [{
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
    },],
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
        ]
    },
    loaded: true
}

export default (state = initial, action) => {
    const { type, payload } = action
    switch (type) {
        case SINGLE_JOB_POST_SUCCESS:
            return {
                ...state,
                jobs: [
                    ...state.jobs,
                    ...payload
                ]
            }
        case SINGLE_JOB_GET_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case SINGLE_JOB_GET_SUCCESS:
            return {
                ...state,
                job: {
                    ...payload
                },
                loaded: true
            }
        case SINGLE_JOB_PUT_SUCCESS:
            return {
                ...state,
                job: { ...payload },
                loaded: true
            }
        default:
            return state
    }
}