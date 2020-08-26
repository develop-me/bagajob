import {
    SAVE_JOB,
} from '../../constants/JobConstants/addJobConstants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case SAVE_JOB:
            return {
                ...state,
                jobs: [
                    ...state.jobs,
                    ...payload
                ]
            }
        default:
            return {}
    }
}