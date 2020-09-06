import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { default as validate } from '../helpers/validateAuth'

const useFormValidation = (initialState, authAction, history) => {
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setSubmitting] = useState(false)
    const dispatch = useDispatch()

    // when the errors state prop is updated, code is run
    useEffect(() => {
        if (isSubmitting) {
            const noErrors = Object.keys(errors).length === 0
            // signup or login action is only dispatched if there are no errors in form
            if (noErrors) {
                dispatch(authAction(values, history))
                setSubmitting(false)
            } else {
                setSubmitting(false)
            }
        }
    }, [errors])

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // credentials are passed into validate helper function, returns an error object
        const validationErrors = validate(values)
        // errors state prop is updated, invoking the above useEffect()
        setErrors(validationErrors)
        // submitting is set to true, disabling the submit button so user can't throttle it
        setSubmitting(true)
    }

    return {
        handleSubmit,
        handleChange,
        values,
        errors,
        isSubmitting
    }
}

export default useFormValidation