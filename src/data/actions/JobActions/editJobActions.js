import axios from '../../axios'

import {
    UPDATE_INTERVIEW,
    UPDATE_APPLICATION_NOTE,
    ADD_NEW_APPLICATION_NOTE
} from '../../constants/JobConstants/editJobConstants'

// get user's bearer token from local storage
const token = localStorage.getItem('user')

// updates a specific job interview's details
export const updateInterview = interview => dispatch => {
    const { id } = interview
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
        dispatch(reducerUpdateInterview(data.data))
    });
}

const reducerUpdateInterview = data => {
    return {
        type: UPDATE_INTERVIEW,
        payload: data
    };
};

// adds new application stage note for specific job
export const addNewAppNote = () => dispatch => {
    axios.post(`user/job/app_notes`, null, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerAddNewAppNote(data.data))
    });
}

const reducerAddNewAppNote = data => {
    return {
        type: ADD_NEW_APPLICATION_NOTE,
        payload: data
    };
};

// updates a single note for a specific job's application card
export const updateAppNote = note => dispatch => {
    const { id } = note
    axios.patch(`user/job/app_notes/${id}`, {
        note_date: note.note_date,
        note_data: note.note_data
    }, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerUpdateAppNote(data.data))
    });
}

const reducerUpdateAppNote = data => {
    return {
        type: UPDATE_APPLICATION_NOTE,
        payload: data,
    };
};