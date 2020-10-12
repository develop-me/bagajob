import React, { useEffect } from 'react'
import AccountHeader from './AccountHeader'
import AccountDetail from './AccountDetail'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteAccount } from '../../data/Account/actions'
import { resetAuthResponse } from '../../data/Auth/actions'
import checkmark from '../../assets/images/done-24px.svg'
import Nav from '../Nav'

const Account = ( data ) => {
    const { user_id, access_token, loaded, name, email } = useSelector(state => state)
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
        <Nav />
        <div className="account-header">
            <Link to="/mainpage">
                <button className="secondarybtn home-btn">HOME</button>
            </Link>
            <h1 className="headline">My Account</h1>
        </div>
            <AccountHeader />
            <p>{ errors.message }</p>
            <div className="account-container">
                <AccountDetail
                    accountDetailName="name"
                    value={ name }
                />
                <AccountDetail
                    accountDetailName="email"
                    value={ email }
                />
               <div className="account-detail-card">
                    <Link style={{margin: "auto"}} to="/forgot-password"><button className="primarybtn reset-pass-btn">RESET PASSWORD</button>
                    </Link> 
                </div>
                <div className="account-detail-card">
                    <button style={{margin: "auto"}}className="primarybtn del-acc-btn" onClick={handleDeleteAccount}>DELETE MY ACCOUNT</button>
                </div>
                
            </div>
        

        </>
        :  
        <>
            <img className="check-icon filter-green" src={checkmark} alt="green checkmark"></img>
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