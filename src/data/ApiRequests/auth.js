import axios from '../axios'

// sign up user post request
export const signUp = data => {
    return axios.post('register', data)
}

// login user post request
export const login = data => {
    const login_data = {
        username: data.email,
        password: data.password
    }
    return axios.post('user/login', login_data)
}

// initial forgot password post request, responds with an email to the user
export const forgotPasswordInit = () => {
    return axios.post('reset-password-without-token')
}