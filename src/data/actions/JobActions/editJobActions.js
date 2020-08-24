import axios from '../../axios'

import { SAVE_INTERVIEW } from '../../constants/JobConstants/editJobConstants'

export const saveInterview = (interview) => dispatch => {
    const { id } = interview
    const token = localStorage.getItem('user')
    axios.patch(`user/job/interview/${id}`, {
        interview_date: interview.interviewDate,
        format: interview.format,
        interviewer: interview.interviewer,
        notes: interview.notes
    }, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerSaveInterview(data))
    });
}

export const reducerSaveInterview = (data) => {
    return {
        type: SAVE_INTERVIEW,
        payload: data,
    };
};