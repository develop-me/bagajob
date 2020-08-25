import {
    ADD_NEW_INTERVIEW,
    UPDATE_INTERVIEW,
    DELETE_INTERVIEW,
    ADD_NEW_APPLICATION_NOTE,
    UPDATE_APPLICATION_NOTE,
    DELETE_APPLICATION_NOTE
} from '../../constants/JobConstants/editJobConstants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_NEW_APPLICATION_NOTE:
            return {
                ...state,
                job: {
                    ...state.job,
                    application_notes: [...state.application_notes, payload]
                },
            }
        case UPDATE_APPLICATION_NOTE:
            return {
                ...state,
                job: {
                    ...state.job,
                    application_notes: state.application_notes.map(note => note.id === payload.id ? payload : note)
                },
            }
        case DELETE_APPLICATION_NOTE:
            return {
                ...state,
                job: {
                    ...state.job,
                    application_notes: state.application_notes.filter(note => note.id !== payload)
                },
            }
        case ADD_NEW_INTERVIEW:
            return {
                ...state,
                job: {
                    ...state.job,
                    interviews: [...state.interviews, payload]
                },
            }
        case UPDATE_INTERVIEW:
            return {
                ...state,
                job: {
                    ...state.job,
                    interviews: state.job.interviews.map(interview => interview.id === payload.id ? payload : interview)
                },
            }
        case DELETE_INTERVIEW:
            return {
                ...state,
                job: {
                    ...state.job,
                    interviews: state.interviews.filter(interview => interview.id !== payload)
                },
            }
        default:
            return {}
    }
}