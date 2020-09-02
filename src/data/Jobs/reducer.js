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
    job: {},
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