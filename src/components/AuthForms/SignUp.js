import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import useFormValidation from "../../customHooks/useFormValidation"
import { resetAuthResponse, signUp, resetErrors } from '../../data/Auth/actions'

const initialState = {
    name: "",
    email: "",
    password: ""
}

const SignUp = ({ history }) => {
    const { loaded } = useSelector(state => state)
    const { authResponse } = useSelector(state => state)
    const authErrors = useSelector(state => state.errors)

    const dispatch = useDispatch()

    // destructuring the properties returned from the custom hook
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        isSubmitting
    } = useFormValidation(initialState, signUp, history)

    // resets authResponse global state property every time component renders
    useEffect(() => {
        dispatch(resetAuthResponse())
    }, [])

    // resets errors property in global state every time component renders
    useEffect(() => {
        dispatch(resetErrors())
    }, [])

    return (
        <>
            <h1 className="brand-text">bagajob</h1>
            <div className="form-container-small signup-container">
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="signup-form-input-container">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Full name"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.name && <p className="error-text">{errors.name}</p>}
                    <div className="signup-form-input-container">
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.email && <p className="error-text">{errors.email}</p>}
                    <div className="signup-form-input-container">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>
                    {errors.password && <p className="error-text">{errors.password}</p>}
                    <button
                        disabled={isSubmitting}
                        className="primarybtn createacc-btn"
                        type="submit"
                    >
                        CREATE ACCOUNT
                    </button>
                    {authResponse !== null && loaded === false ? <p>{authResponse}</p> : null}
                    {/* the below error can be modified later for a more user friendly message */}
                    {authErrors !== null ? <p>{authErrors.message}</p> : null}
                    <p className="login-prompt">
                        Already have an account? <Link to="/home/login">Log in</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignUp