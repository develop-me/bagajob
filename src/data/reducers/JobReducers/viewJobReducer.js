import {
    VIEW_SINGLE_JOB,
} from '../../constants/JobConstants/viewJobConstants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case VIEW_SINGLE_JOB:
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