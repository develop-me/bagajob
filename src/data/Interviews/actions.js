import axios from '../axios'

import {
    INTERVIEW_POST_REQUEST,
    INTERVIEW_PUT_REQUEST,
    INTERVIEW_DELETE_REQUEST,
} from './constants'

const token = localStorage.getItem('user')

// adds new empty interview row for specific job
export const addNewInterview = data => dispatch => {
    const { user_id, job_id } = data
    axios.post(`user/${user_id}/job/${job_id}/interview`, null, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerAddNewInterview(data.data))
    });
}

const reducerAddNewInterview = data => {
    return {
        type: INTERVIEW_POST_REQUEST,
        payload: data
    };
};

// updates a specific job interview's details
export const updateInterview = data => dispatch => {
    const { user_id, job_id, interview_data } = data
    // only destructure the id as we want to preserve the interviewData object to send through to the db
    const { id: interview_id } = interview_data
    // make sure keys are the same as in the database, can just pass in the interviewData object. create the object when dispatching the action and simply pass it through.
    axios.put(`user/${user_id}/job/${job_id}/interview/${interview_id}`, interview_data, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(reducerUpdateInterview(data.data))
    });
}

// need to verify that the user owns the job and the job owns the interview, but this can be dealt with as the bearer token is verified on the backend to prove it's the user making the request

const reducerUpdateInterview = data => {
    return {
        type: INTERVIEW_PUT_REQUEST,
        payload: data
    };
};

// deletes a single interview from a specific job's interview card
export const deleteInterview = id => dispatch => {
    axios.patch(`user/job/interview/${id}`, null, {
        headers: {
            'Authorization': token
        }
    }).then(() => {
        dispatch(reducerDeleteInterview(id))
    });
}

const reducerDeleteInterview = id => {
    return {
        type: INTERVIEW_DELETE_REQUEST,
        payload: id
    };
};