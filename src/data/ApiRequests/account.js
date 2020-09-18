import axios from '../axios'

const token = localStorage.getItem('user')

// user patch request
export const updateAccount = data => {
    const { user_id, account_data, access_token } = data
    return axios.patch(`user/${user_id}`, account_data, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}

// user delete request
export const deleteAccount = data => {
    const { user_id, access_token } = data
    return axios.delete(`user/${user_id}`, null, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
}