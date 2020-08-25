import axios from '../../axios'

import { VIEW_SINGLE_JOB } from '../../constants/JobConstants/viewJobConstants'

export const getSingleJob = job_id => dispatch => {
    const token = localStorage.getItem('user')
    axios.get(`user/jobs/${job_id}`, null, {
        headers: {
            'Authorization': token
        }
    }).then(data => {
        dispatch(saveJob(data.data))
    });
}

export const saveJob = data => {
    return {
        type: VIEW_SINGLE_JOB,
        payload: data,
    };
};