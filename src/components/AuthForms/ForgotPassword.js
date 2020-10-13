import React, { useEffect } from 'react'
import { forgotPasswordInit, resetAuthResponse, resetErrors } from '../../data/Auth/actions'
import useFormValidation from '../../customHooks/useFormValidation'
import { useSelector, useDispatch } from 'react-redux'
import Nav from '../Nav'

const initialState = {
    email: ""
}

const ForgotPassword = () => {
    // destructuring the properties returned from the custom hook
    const {
        handleSubmit,
        handleChange,
        values,
        errors,
        isSubmitting
    } = useFormValidation(initialState, forgotPasswordInit)

    const dispatch = useDispatch()
    // resets authResponse global state property every time component renders
    useEffect(() => {
        dispatch(resetAuthResponse())
    }, [])
    // resets errors property in global state every time component renders
    useEffect(() => {
        dispatch(resetErrors())
    }, [])
    
    const { authResponse } = useSelector(state => state)
    const { loaded } = useSelector(state => state)

    return (
        <>
        <Nav />
        <div className="pass-reset-card">
            <form className="pass-reset-form" onSubmit={handleSubmit}>
                <h2 className="para-header center">Please enter your email, you will then be emailed a link to reset your password.</h2>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
                <button className="primarybtn pass-reset-btn"
                    type="submit"
                    disabled={isSubmitting}
                >Submit
                </button>
                {authResponse !== null && loaded !== false ? <p>{authResponse}</p> : null}
            </form>
        </div>
        </>
    )
}

export default ForgotPassword