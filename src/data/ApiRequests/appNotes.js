import axios from '../axios'

const token = localStorage.getItem('user')

// application note post request
export const addAppNote = data => {
    const { user_id, job_id } = data
    return axios.post(`user/${user_id}/jobs/${job_id}/app-notes`, null, {
        headers: {
            'Authorization': token
        }
    })
}

// application note patch request
export const updateAppNote = data => {
    const { user_id, job_id, note_id, note_data } = data
    return axios.patch(`user/${user_id}/jobs/${job_id}/app-notes/${note_id}`, note_data, {
        headers: {
            'Authorization': token
        }
    })
}

// application note delete request
export const deleteAppNote = data => {
    const { user_id, job_id, note_id } = data
    return axios.delete(`user/${user_id}/jobs/${job_id}/app-notes/${note_id}`, null, {
        headers: {
            'Authorization': token
        }
    })
}