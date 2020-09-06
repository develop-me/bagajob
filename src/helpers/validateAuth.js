const validateAuth = values => {
    let errors = {}
    // name errors - this first if statement allows this function to be used for the login form, which doesn't have a name input. otherwise this error would occur for the login form and stop it submitting
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
    if (!values.password) {
        errors.password = "Please enter a password."
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters."
    }
    return errors
}

export default validateAuth