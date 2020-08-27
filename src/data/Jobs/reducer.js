import {
    SINGLE_JOB_GET_REQUEST,
    SINGLE_JOB_GET_SUCCESS,
    SINGLE_JOB_PUT_SUCCESS,
    SINGLE_JOB_POST_SUCCESS,
} from './constants'

export const reducer = (state, action) => {
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
                    job: {
                        ...payload
                    },
                    loaded: true
                }
            }
        case SINGLE_JOB_PUT_SUCCESS:
            return {
                ...state,
                job: { ...payload },
                loaded: true
            }
        default:
            return {}
    }
}