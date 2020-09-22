import axios from '../axios'

// sign up user post request
export const signUp = data => {
    return axios.post('register', data)
    // return new Promise((resolve, reject) => { 
    //     resolve(axios.post('register', data))
        
    // })
}

// login user post request
export const login = data => {
    const login_data = {
        username: data.email,
        password: data.password
    }
    return axios.post('login', login_data)
}

// initial forgot password post request, responds with an email to the user
export const forgotPasswordInit = data => {
    return axios.post('reset-password-without-token', data)
}

// password reset request with password reset token
export const passwordReset = data => {
    return axios.post('reset-password-with-token', data)
}