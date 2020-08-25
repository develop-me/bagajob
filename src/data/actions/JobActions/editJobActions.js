import axios from '../../axios'

import {
    ADD_NEW_APPLICATION_NOTE,
    UPDATE_APPLICATION_NOTE,
    DELETE_APPLICATION_NOTE,
    ADD_NEW_INTERVIEW,
    UPDATE_INTERVIEW
} from '../../constants/JobConstants/editJobConstants'

// get user's bearer token from local storage
const token = localStorage.getItem('user')

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

// deletes a single note for a specific job's application card
export const deleteAppNote = id => dispatch => {
    axios.patch(`user/job/app_notes/${id}`, null, {
        headers: {
            'Authorization': token
        }
    }).then(() => {
        dispatch(reducerDeleteAppNote(id))
    });
}

const reducerDeleteAppNote = id => {
    return {
        type: DELETE_APPLICATION_NOTE,
        payload: id
    };
};

// adds new interview for specific job
export const addNewInterview = () => dispatch => {
    axios.post(`user/job/interview`, null, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerAddNewInterview(data.data))
    });
}

const reducerAddNewInterview = data => {
    return {
        type: ADD_NEW_INTERVIEW,
        payload: data
    };
};

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