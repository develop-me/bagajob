import {
    INTERVIEW_POST_REQUEST,
    INTERVIEW_POST_SUCCESS,
    INTERVIEW_POST_FAILURE,
    INTERVIEW_PATCH_REQUEST,
    INTERVIEW_PATCH_SUCCESS,
    INTERVIEW_PATCH_FAILURE,
    INTERVIEW_DELETE_REQUEST,
    INTERVIEW_DELETE_SUCCESS,
    INTERVIEW_DELETE_FAILURE
} from './constants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case INTERVIEW_POST_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case INTERVIEW_POST_SUCCESS:
            return {
                ...state,
                job: {
                    ...state.job,
                    data: {
                        ...state.job.data,
                        data: {
                            ...state.job.data.data,
                            interviews: [...state.job.data.data.interviews, payload.data.data]
                        }
                    },
                },
                loaded: true
            }
        case INTERVIEW_POST_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        case INTERVIEW_PATCH_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case INTERVIEW_PATCH_SUCCESS:
            return {
                ...state,
                job: {
                    ...state.job,
                    data: {
                        ...state.job.data,
                        data: {
                            ...state.job.data.data,
                            interviews: state.job.data.data.interviews.map(interview => interview.id === payload.id ? payload : interview)
                        }
                    },

                },
                loaded: true
            }
        case INTERVIEW_PATCH_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        case INTERVIEW_DELETE_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case INTERVIEW_DELETE_SUCCESS:
            return {
                ...state,
                job: {
                    ...state.job,
                    INTERVIEWs: state.job.interviews.filter(interview => interview.id !== payload)
                },
                loaded: true
            }
        case INTERVIEW_DELETE_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        default:
            return {}
    }
}