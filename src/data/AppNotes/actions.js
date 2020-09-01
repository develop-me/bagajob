import axios from '../axios'

import {
    APPLICATION_NOTE_POST_REQUEST,
    APPLICATION_NOTE_POST_SUCCESS,
    APPLICATION_NOTE_PUT_REQUEST,
    APPLICATION_NOTE_PUT_SUCCESS,
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
        type: APPLICATION_NOTE_PUT_SUCCESS,
        payload: data,
    };
};

// deletes a single note from a specific job's application card
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
        type: APPLICATION_NOTE_DELETE_SUCCESS,
        payload: id
    };
};