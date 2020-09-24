import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { resetAuthResponse, logout } from '../../data/Auth/actions'
import checkmark from '../../assets/images/done-24px.svg'
import Nav from '../Nav'

const initialState = {
    email: "",
    password: ""
}

const Logout = () => {
    const { authResponse } = useSelector(state => state)
    const access_token = useSelector(state => state.user.access_token)

    const dispatch = useDispatch()

    // resets authResponse global state property every time component renders
    useEffect(() => {
        dispatch(resetAuthResponse())
    }, [])

    const handleClick= e => {
        dispatch(logout())
    }

    return (
        <>
        {/* requires styling */}
        <Nav />

        <div className="form-container-small logout-container">

            { access_token ? 
            <>
                <h1 className="para-header">Are you sure you want to log out?</h1>
                <button className="primarybtn" type="submit" onClick={handleClick}>
                    LOG OUT
                </button>
                </>
                :
                <>
                <img className="check-icon" src={checkmark} alt="green checkmark"></img>
                <h1 className="headline">Logged Out</h1>
                <Link to="/home/login"> 
                    <button className="primarybtn">
                        RETURN TO LOGIN
                    </button>
                </Link>
                </>
                }

            <b>{authResponse !== null && authResponse}</b>
        </div>
    </>
    )
}

export default Logout