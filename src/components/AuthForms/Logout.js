import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { resetAuthResponse, logout } from '../../data/Auth/actions'

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
            <h1 className="brand-text">bagajob</h1>

            <div className="form-container-small logout-container">
                <h1 className="para-header">Are you sure you want to log out?</h1>
                
                { access_token ? 
                    <button className="primarybtn" type="submit" onClick={handleClick}>
                        LOG OUT
                    </button>
                    :
                    <Link to="/home/login"> 
                        <button className="primarybtn">
                            RETURN TO LOGIN
                        </button>
                    </Link>
                    }

                <b>{authResponse !== null && authResponse}</b>
            </div>
        </>
    )
}

export default Logout