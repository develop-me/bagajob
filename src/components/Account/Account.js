import React from 'react'
import AccountHeader from './AccountHeader'
import AccountDetail from './AccountDetail'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAccount } from '../../data/Account/actions'

const Account = ( data ) => {
    const { user_id } = useSelector(state => state)
    const { access_token } = useSelector(state => state)
    console.log(access_token)
    console.log(user_id)
    const dispatch = useDispatch()

    // disptaches action to delete user's account
    const handleDeleteAccount = () => {
        dispatch(deleteAccount({ user_id }))
    }

    return (
        <>
            <AccountHeader />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", width: "30rem", margin: "0 auto" }}>
                <AccountDetail
                    accountDetailName="email"
                    value={1}
                />
                <AccountDetail
                    accountDetailName="name"
                    value={2}
                />
                <button onClick={handleDeleteAccount}>DELETE MY ACCOUNT</button>
            </div>
        </>
    )
}

export default Account