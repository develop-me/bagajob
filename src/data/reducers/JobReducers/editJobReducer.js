import {
    SAVE_INTERVIEW,
} from '../../constants/JobConstants/editJobConstants'

export default (state, action) => {
    const { type, payload } = action
    switch (type) {
        case SAVE_INTERVIEW:
            return {
                ...state,
                job: {
                    ...state.job,
                    interviews: [
                        ...state.job.interviews,
                        {
                            ...payload
                        }
                    ]
                },
            }
        default:
            return {}
    }
}