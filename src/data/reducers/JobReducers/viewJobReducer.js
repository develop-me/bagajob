import {
    SAVE_JOB,
} from '../../constants/JobConstants/viewJobConstants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case SAVE_JOB:
            return {
                ...state,
                job: {
                    ...payload
                },
                jobLoaded: true
            }
        default:
            return {}
    }
}