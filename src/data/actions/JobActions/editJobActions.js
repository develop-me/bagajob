import axios from '../../axios'

import {
    SAVE_INTERVIEW,
    UPDATE_INTERVIEW,
    UPDATE_APPLICATION_NOTE,
    DELETE_APPLICATION_NOTE,
} from '../../constants/JobConstants/editJobConstants'

// updates a specific job interview's details
export const updateInterview = interview => dispatch => {
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
        dispatch(reducerUpdateInterview(data))
    });
}

const reducerUpdateInterview = data => {
    return {
        type: UPDATE_INTERVIEW,
        payload: data,
    };
};

// updates a single note for a specific job's application card
export const updateAppNote = note => dispatch => {
    const { id } = note
    const token = localStorage.getItem('user')
    axios.patch(`user/job/app_notes/${id}`, {
        note_category: note.note_category,
        note_date: note.note_date,
        note_data: note.note_data
    }, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerUpdateAppNote(data))
    });
}

const reducerUpdateAppNote = (data) => {
    return {
        type: UPDATE_APPLICATION_NOTE,
        payload: data,
    };
};