import React, { useEffect } from 'react'
import AccountHeader from './AccountHeader'
import AccountDetail from './AccountDetail'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAccount } from '../../data/Account/actions'
import { resetAuthResponse } from '../../data/Auth/actions'
import checkmark from '../../assets/images/done-24px.svg'

const Account = ( data ) => {
    const { user_id } = useSelector(state => state)
    const { access_token } = useSelector(state => state)
    const { loaded } = useSelector(state => state)
    const errors = useSelector(state => state.errors)

    const dispatch = useDispatch()

    // resets authResponse global state property every time component renders
    useEffect(() => {
        dispatch(resetAuthResponse())
    }, [])

    // disptaches action to delete user's account
    const handleDeleteAccount = () => {
        dispatch(deleteAccount({ user_id, access_token }))
    }

    return (
        <>
        { access_token ? 
        <>
            <AccountHeader />
            <p>{ errors.message }</p>
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
        :  
        <>
            <img className="check-icon" src={checkmark} alt="green checkmark"></img>
            <h1 className="headline">Account Deleted</h1>
            <Link to="/home"> 
                <button className="primarybtn">
                    RETURN HOME
                </button>
            </Link>
            </>
        }
        
        </>
    )
}

export default Account