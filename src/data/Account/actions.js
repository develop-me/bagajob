import {
    updateAccount as apiUpdateAccount,
    deleteAccount as apiDeleteAccount
} from '../ApiRequests/account'

import {
    ACCOUNT_PATCH_REQUEST,
    ACCOUNT_PATCH_SUCCESS,
    ACCOUNT_PATCH_FAILURE,
    ACCOUNT_DELETE_REQUEST,
    ACCOUNT_DELETE_SUCCESS,
    ACCOUNT_DELETE_FAILURE
} from './constants'

// update single account detail
export const updateAccount = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(updateAccountRequest())
        apiUpdateAccount(data)
            .then(successResponse => {
                dispatch(updateAccountSuccess(successResponse))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(updateAccountFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const updateAccountRequest = () => dispatch => {
    dispatch({
        type: ACCOUNT_PATCH_REQUEST,
    })
}

const updateAccountSuccess = data => dispatch => {
    dispatch({
        type: ACCOUNT_PATCH_SUCCESS,
        payload: data,
    })
}

const updateAccountFailure = error => dispatch => {
    dispatch({
        type: ACCOUNT_PATCH_FAILURE,
        payload: error,
    })
}

// delete user account
export const deleteAccount = data => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch(deleteAccountRequest())
        apiDeleteAccount(data)
            .then(successResponse => {
                dispatch(deleteAccountSuccess(data.user_id))
                resolve(successResponse)
            })
            .catch(errorResponse => {
                dispatch(deleteAccountFailure(errorResponse))
                reject(errorResponse)
            })
    })
}

const deleteAccountRequest = () => dispatch => {
    dispatch({
        type: ACCOUNT_DELETE_REQUEST
    })
}

const deleteAccountSuccess = data => dispatch => {
    dispatch({
        type: ACCOUNT_DELETE_SUCCESS,
        payload: data
    })
}

const deleteAccountFailure = error => dispatch => {
    dispatch({
        type: ACCOUNT_DELETE_FAILURE,
        payload: error
    })
}