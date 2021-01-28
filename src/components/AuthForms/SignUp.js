import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import useFormValidation from "../../customHooks/useFormValidation"
import { resetAuthResponse, signUp, resetErrors } from '../../data/Auth/actions'
import Nav from '../Nav'

import background from "../../assets/images/backgroundIcons.svg";

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
        <div className="login-background" style={{ backgroundSize: 'fill', backgroundImage: `url(${background})` }}>
            <Link to="/home/">
                <h1 className="brand-title center">Bagajob<span className="highlight-text">.</span></h1>
            </Link>
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
                    {authResponse !== null && loaded === false ? <p className="para-highlight center">{authResponse}</p> : null}
                    {/* the below error can be modified later for a more user friendly message */}
                    {authErrors !== null ? <p className="para-highlight center">{authErrors.message}</p> : null}
                </form>
            </div>
            <p className="login-prompt center mb-3">
                Already have an account? <Link style={{ textDecoration: "underline" }} to="/home/login">Log in</Link>
            </p>
        </div>
    )
}

export default SignUp