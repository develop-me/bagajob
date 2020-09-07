const validateAuth = values => {
    let errors = {}
    // the nested if statements allow this function to be used for the login form, signup form and password reset form, as they check whether there is a name and password input present. For forms they are not present in, they will be ignored, rather than causing an error saying they haven't been filled out.

    // name errors 
    if ('name' in values) {
        if (!values.name) {
            errors.name = "Please enter a name."
        }
    }
    // email errors
    if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Please enter a valid email address."
    }
    // password errors
    if ('password' in values) {
        if (!values.password) {
            errors.password = "Please enter a password."
        } else if (values.password.length < 6) {
            errors.password = "Password must be at least 6 characters."
        }
    }
    return errors
}

export default validateAuth