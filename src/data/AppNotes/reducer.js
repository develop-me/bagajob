import {
    APPLICATION_NOTE_POST_REQUEST,
    APPLICATION_NOTE_POST_SUCCESS,
    APPLICATION_NOTE_POST_FAILURE,
    APPLICATION_NOTE_PATCH_REQUEST,
    APPLICATION_NOTE_PATCH_SUCCESS,
    APPLICATION_NOTE_PATCH_FAILURE,
    APPLICATION_NOTE_DELETE_REQUEST,
    APPLICATION_NOTE_DELETE_SUCCESS,
    APPLICATION_NOTE_DELETE_FAILURE
} from './constants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case APPLICATION_NOTE_POST_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case APPLICATION_NOTE_POST_SUCCESS:
            return {
                ...state,
                job: {
                    ...state.job,
                    data: {
                        ...state.job.data,
                        data: {
                            ...state.job.data.data,
                            application_notes: [...state.job.data.data.application_notes, payload]
                        }
                        
                    },
                },
                loaded: true
            }
        case APPLICATION_NOTE_POST_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        case APPLICATION_NOTE_PATCH_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case APPLICATION_NOTE_PATCH_SUCCESS:
            return {
                ...state,
                job: {
                    ...state.job,
                    data: {
                        ...state.job.data,
                        data: {
                            ...state.job.data.data,
                            application_notes: state.job.data.data.application_notes.map(note => note.id === payload.id ? payload : note)
                        }
                    },
                },
                loaded: true
            }
        case APPLICATION_NOTE_PATCH_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        case APPLICATION_NOTE_DELETE_REQUEST:
            return {
                ...state,
                loaded: false
            }
        case APPLICATION_NOTE_DELETE_SUCCESS:
            return {
                ...state,
                job: {
                    ...state.job,
                    data: {
                        ...state.job.data,
                        data: {
                            ...state.job.data.data,
                            application_notes: state.job.data.data.application_notes.filter(note => note.id !== payload)
                        }
                    },
                },
                loaded: true
            }
        case APPLICATION_NOTE_DELETE_FAILURE:
            return {
                ...state,
                loaded: true,
                errors: payload
            }
        default:
            return {}
    }
}