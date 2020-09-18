import axios from '../axios'

const token = localStorage.getItem('user')

// interview post request
export const addInterview = data => {
    const { user_id, job_id, access_token } = data
    return axios.post(`user/${user_id}/jobs/${job_id}/interviews`, null, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// interview patch request
export const updateInterview = data => {
    const { user_id, job_id, interview_data, access_token } = data
    // only destructure the id as we want to preserve the interview_data object to send through to the db
    const { id: interview_id } = interview_data
    return axios.patch(`user/${user_id}/jobs/${job_id}/interviews/${interview_id}`, interview_data, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// interview delete request
export const deleteInterview = data => {
    const { user_id, job_id, interview_id, access_token } = data
    return axios.delete(`user/${user_id}/jobs/${job_id}/interviews/${interview_id}`, null, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}