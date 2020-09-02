import axios from '../axios'

import {
    APPLICATION_NOTE_POST_REQUEST,
    APPLICATION_NOTE_POST_SUCCESS,
    APPLICATION_NOTE_PATCH_REQUEST,
    APPLICATION_NOTE_PATCH_SUCCESS,
    APPLICATION_NOTE_DELETE_REQUEST,
    APPLICATION_NOTE_DELETE_SUCCESS
} from './constants'

const token = localStorage.getItem('user')

// adds new application card note for specific job
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
        type: APPLICATION_NOTE_POST_SUCCESS,
        payload: data
    };
};

// updates a single note for a specific job's application card
export const updateAppNote = data => dispatch => {
    const { user_id, job_id, note_id, note_data } = data
    axios.patch(`user/${user_id}/job/${job_id}/app_notes/${note_id}`, note_data, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerUpdateAppNote(data.data))
    });
}

const reducerUpdateAppNote = data => {
    return {
        type: APPLICATION_NOTE_PATCH_SUCCESS,
        payload: data,
    };
};

// deletes a single note from a specific job's application card
export const deleteAppNote = data => dispatch => {
    const { user_id, job_id, note_id } = data
    axios.patch(`user/${user_id}/job/${job_id}/app_notes/${note_id}`, null, {
        headers: {
            'Authorization': token
        }
    }).then(() => {
        dispatch(reducerDeleteAppNote(note_id))
    });
}

const reducerDeleteAppNote = id => {
    return {
        type: APPLICATION_NOTE_DELETE_SUCCESS,
        payload: id
    };
};