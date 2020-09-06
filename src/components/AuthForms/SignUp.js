import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import useFormValidation from "../../customHooks/useFormValidation"
import { resetAuthResponse } from '../../data/Auth/actions'
import { signUp } from '../../data/Auth/actions'

const initialState = {
    name: "",
    email: "",
    password: ""
}

const SignUp = ({ history }) => {
    const { authResponse } = useSelector(state => state)
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
                    {authResponse !== null && <p>{authResponse}</p>}
                    <p className="login-prompt">
                        Already have an account? <Link to="/home/login">Log in</Link>
                    </p>
                </form>
            </div>
        </>
    )
}

export default SignUp