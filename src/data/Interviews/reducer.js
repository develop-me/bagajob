import {
    // APPLICATION_NOTE_POST_REQUEST,
    // APPLICATION_NOTE_PUT_REQUEST,
    // APPLICATION_NOTE_DELETE_REQUEST,
} from './constants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        // case APPLICATION_NOTE_POST_REQUEST:
        //     return {
        //         ...state,
        //         job: {
        //             ...state.job,
        //             application_notes: [...state.application_notes, payload]
        //         },
        //         loa
        //     }
        // case APPLICATION_NOTE_PUT_REQUEST:
        //     return {
        //         ...state,
        //         job: {
        //             ...state.job,
        //             application_notes: state.job.application_notes.map(note => note.id === payload.id ? payload : note)
        //         },
        //         loaded: true
        //     }
        // case APPLICATION_NOTE_DELETE_REQUEST:
        //     return {
        //         ...state,
        //         job: {
        //             ...state.job.job,
        //             application_notes: state.job.application_notes.filter(note => note.id !== payload)
        //         },
        //         loaded: true
        //     }
        default:
            return {}
    }
}