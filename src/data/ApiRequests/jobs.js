import axios from '../axios'

// access_token is instead taken from 'data'
// const token = localStorage.getItem('user')

// jobs get request
export const getJobs = data => {
    const { user_id, access_token } = data 
     return axios.get(`user/${user_id}/jobs`, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// single job get request
export const getJob = data => {
    const { user_id, job_id, access_token } = data
    return axios.get(`user/${user_id}/jobs/${job_id}`, null, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// single job post request
export const addJob = data => {
    const { user_id, access_token, job_data, } = data
    return axios.post(`user/${user_id}/jobs`, job_data, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// single job patch request
export const updateJob = data => {
    const { user_id, job_id, job_data, access_token } = data
    return axios.patch(`user/${user_id}/jobs/${job_id}`, job_data, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// single job delete request
export const deleteJob = data => {
    const { user_id, job_id, access_token } = data
    return axios.delete(`user/${user_id}jobs/${job_id}`, null, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}