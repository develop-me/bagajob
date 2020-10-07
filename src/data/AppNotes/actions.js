import {
    addAppNote as apiAddAppNote,
    updateAppNote as apiUpdateAppNote,
    deleteAppNote as apiDeleteAppNote
} from '../ApiRequests/appNotes'

import {
    APPLICATION_NOTE_POST_REQUEST,
    APPLICATION_NOTE_POST_SUCCESS,
    APPLICATION_NOTE_POST_FAILURE,
    APPLICATION_NOTE_PATCH_REQUEST,
    APPLICATION_NOTE_PATCH_SUCCESS,
    APPLICATION_NOTE_PATCH_FAILURE,
    APPLICATION_NOTE_DELETE_REQUEST,
    APPLICATION_NOTE_DELETE_SUCCESS,
    APPLICATION_NOTE_DELETE_FAILURE
} from './constants'

// adds new application note for specific job
export const addAppNote = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(addAppNoteRequest())
        apiAddAppNote(data)
            .then(successResponse => {
                dispatch(addAppNoteSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(addAppNoteFailure(errorResponse))
            })
    })
}

const addAppNoteRequest = () => dispatch => (
    dispatch({
        type: APPLICATION_NOTE_POST_REQUEST,
    })
)

const addAppNoteSuccess = data => dispatch => (
    dispatch({
        type: APPLICATION_NOTE_POST_SUCCESS,
        payload: data.data
    })
)

const addAppNoteFailure = error => dispatch => (
    dispatch({
        type: APPLICATION_NOTE_POST_FAILURE,
        payload: error
    })
)

// updates a specific application card note for a specific job
export const updateAppNote = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(updateAppNoteRequest())
        apiUpdateAppNote(data)
            .then(successResponse => {
                dispatch(updateAppNoteSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(updateAppNoteFailure(errorResponse))
            })
    })
}

const updateAppNoteRequest = () => dispatch => (
    dispatch({
        type: APPLICATION_NOTE_PATCH_REQUEST,
    })
)

const updateAppNoteSuccess = data => dispatch => {
    return (
        dispatch({
            type: APPLICATION_NOTE_PATCH_SUCCESS,
            payload: data.data
        })
    )
}

const updateAppNoteFailure = error => dispatch => (
    dispatch({
        type: APPLICATION_NOTE_PATCH_FAILURE,
        payload: error
    })
)

// deletes a single note from a specific job's application card
export const deleteAppNote = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(deleteAppNoteRequest())
        apiDeleteAppNote(data)
            .then(successResponse => {
                dispatch(deleteAppNoteSuccess(data.note_id))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(deleteAppNoteFailure(errorResponse))
            })
    })
}

const deleteAppNoteRequest = () => dispatch => (
    dispatch({
        type: APPLICATION_NOTE_DELETE_REQUEST,
    })
)

const deleteAppNoteSuccess = data => dispatch => {
    console.log(data)
    return (
        dispatch({
            type: APPLICATION_NOTE_DELETE_SUCCESS,
            payload: data
        })
    )
}

const deleteAppNoteFailure = error => dispatch => (
    dispatch({
        type: APPLICATION_NOTE_DELETE_FAILURE,
        payload: error
    })
)