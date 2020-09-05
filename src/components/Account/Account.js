import React from 'react'
import AccountHeader from './AccountHeader'
import AccountDetail from './AccountDetail'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAccount } from '../../data/Account/actions'

const Account = () => {
    const { id: user_id, email, name } = useSelector(state => state.user)
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
                    value={email}
                />
                <AccountDetail
                    accountDetailName="name"
                    value={name}
                />
                <button onClick={handleDeleteAccount}>DELETE MY ACCOUNT</button>
            </div>
        </>
    )
}

export default Account