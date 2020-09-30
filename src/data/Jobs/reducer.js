import {
    JOBS_GET_REQUEST,
    JOBS_GET_SUCCESS,
    JOBS_GET_FAILURE,
    SINGLE_JOB_GET_REQUEST,
    SINGLE_JOB_GET_SUCCESS,
    SINGLE_JOB_GET_FAILURE,
    SINGLE_JOB_POST_REQUEST,
    SINGLE_JOB_POST_SUCCESS,
    SINGLE_JOB_POST_FAILURE,
    SINGLE_JOB_PATCH_REQUEST,
    SINGLE_JOB_PATCH_SUCCESS,
    SINGLE_JOB_PATCH_FAILURE,
    SINGLE_JOB_DELETE_REQUEST,
    SINGLE_JOB_DELETE_SUCCESS,
    SINGLE_JOB_DELETE_FAILURE
} from './constants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case JOBS_GET_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case JOBS_GET_SUCCESS:
            return {
                ...state,
                jobs: [...payload],
                loaded: true
            }
        case JOBS_GET_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        case SINGLE_JOB_GET_REQUEST:
            return {
                ...state,

            }
        case SINGLE_JOB_GET_SUCCESS:
            return {
                ...state,
                job: {
                    ...payload
                },
                loaded: true
            }
        case SINGLE_JOB_GET_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        case SINGLE_JOB_POST_REQUEST:
            return {
                ...state,
                loaded: false,
                job_id: "",
            }
        case SINGLE_JOB_POST_SUCCESS:
            return {
                ...state,
                jobs: [
                    ...state.jobs,
                    payload
                ],
                job_id: payload.data.data.id,
                loaded: true
            }
        case SINGLE_JOB_POST_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        case SINGLE_JOB_PATCH_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case SINGLE_JOB_PATCH_SUCCESS:
            return {
                ...state,
                job: { ...payload },
                loaded: true
            }
        case SINGLE_JOB_PATCH_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        case SINGLE_JOB_DELETE_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case SINGLE_JOB_DELETE_SUCCESS:
            return {
                ...state,
                jobs: state.jobs.filter(job => job.id !== payload),
                job: {},
                loaded: true
            }
        case SINGLE_JOB_DELETE_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        default:
            return {}
    }
}