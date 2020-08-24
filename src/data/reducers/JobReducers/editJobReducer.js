import {
    UPDATE_INTERVIEW,
    SAVE_INTERVIEW,
    UPDATE_APPLICATION_NOTE
} from '../../constants/JobConstants/editJobConstants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case UPDATE_INTERVIEW:
            return {
                ...state,
                job: {
                    ...state.job,
                    interviews: state.job.interviews.map(
                        interview => interview.id === payload.id
                            ?
                            payload
                            :
                            interview
                    )
                },
            }
        case UPDATE_APPLICATION_NOTE:
            return {
                ...state,
                job: {
                    ...state.job,
                    application_notes: state.application_notes.map(
                        note => note.id === payload.id
                            ?
                            payload
                            :
                            note
                    )
                },
            }
        default:
            return {}
    }
}